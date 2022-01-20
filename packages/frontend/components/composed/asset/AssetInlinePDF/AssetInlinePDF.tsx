import React, { useState, useMemo, useRef, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./AssetInlinePDF.styles";
import { AssetInlinePDFFragment$key } from "@/relay/AssetInlinePDFFragment.graphql";
import { useIsMounted, useWindowSize } from "@wdp/lib/hooks";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AssetInlinePDF({ data }: Props) {
  const pdf = useMaybeFragment(fragment, data);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const file = useMemo(() => pdf?.asset?.downloadUrl, [pdf]); // "/pdf/Titanic.pdf";

  const isMounted = useIsMounted();

  const size = useWindowSize();

  const width = useMemo(() => {
    if (wrapperRef?.current) {
      const bounding = wrapperRef.current.getBoundingClientRect();

      return bounding.width;
    }
    return 400;
    // Check sizing when window size changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef, size]);

  const prevPage = useCallback(
    () => (numPages && page > 0 ? setPage(page - 1) : null),
    [page, setPage, numPages]
  );

  const nextPage = useCallback(
    () => (numPages && page < numPages ? setPage(page + 1) : null),
    [page, setPage, numPages]
  );

  return isMounted && file ? (
    <Styled.Wrapper ref={wrapperRef}>
      <nav>
        <button onClick={prevPage} disabled={page === 1}>
          Prev
        </button>
        <span>{` Page ${page} of ${numPages} `}</span>
        <button onClick={nextPage} disabled={page === numPages}>
          Next
        </button>
      </nav>
      <Document
        file={{
          url: file,
          httpHeaders: {
            "Access-Control-Allow-Origin": "*",
          },
        }}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading="Loading PDF..."
        onLoadError={(err) => console.info(err.message)}
      >
        <Page pageNumber={page} width={width} />
      </Document>
      <nav>
        <button onClick={prevPage} disabled={page === 1}>
          Prev
        </button>
        <span>{` Page ${page} of ${numPages} `}</span>
        <button onClick={nextPage} disabled={page === numPages}>
          Next
        </button>
      </nav>
    </Styled.Wrapper>
  ) : null;
}

type Props = {
  data?: AssetInlinePDFFragment$key | null;
};

const fragment = graphql`
  fragment AssetInlinePDFFragment on AssetProperty {
    asset {
      ... on AssetPDF {
        downloadUrl
      }
    }
  }
`;
