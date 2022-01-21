import React, { useState, useMemo, useRef, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useIsMounted, useWindowSize } from "@wdp/lib/hooks";
import * as Styled from "./AssetInlinePDF.styles";
import { AssetInlinePDFFragment$key } from "@/relay/AssetInlinePDFFragment.graphql";
import BasePagination from "components/atomic/Pagination/BasePagination";
import { LoadingBlock } from "components/atomic";

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

  const handleSubmit = useCallback(
    ({ page }) => {
      setPage(parseInt(page));
    },
    [setPage]
  );

  return (
    <Styled.Wrapper ref={wrapperRef}>
      {isMounted && file ? (
        <>
          <div>
            <BasePagination
              page={page}
              pageCount={numPages}
              onSubmit={handleSubmit}
            />
          </div>
          <Document
            file={{
              url: file,
              httpHeaders: {
                "Access-Control-Allow-Origin": "*",
              },
            }}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<LoadingBlock label="common.loading_pdf" />}
            onLoadError={(err) => console.info(err.message)}
          >
            <Page pageNumber={page} width={width} />
          </Document>
          <div>
            <BasePagination
              page={page}
              pageCount={numPages}
              onSubmit={handleSubmit}
            />
          </div>
        </>
      ) : null}
    </Styled.Wrapper>
  );
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
