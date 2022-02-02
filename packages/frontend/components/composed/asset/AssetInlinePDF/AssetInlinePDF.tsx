import React, { useState, useMemo, useRef, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useIsMounted, useWindowSize } from "@wdp/lib/hooks";
import AssetDownloadButton from "../AssetDownloadButton";
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

  const docRef = useRef<HTMLDivElement>(null);

  const file = useMemo(() => pdf?.downloadUrl, [pdf]); // "/pdf/Titanic.pdf";

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

  const height = useMemo(() => {
    if (docRef?.current) {
      const bounding = docRef.current.getBoundingClientRect();

      return bounding.height;
    }
    return 400;
    // Check sizing when page changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docRef, page]);

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
          {page && (
            <Styled.PaginationWrapper>
              <BasePagination
                page={page}
                pageCount={numPages}
                onSubmit={handleSubmit}
              />
            </Styled.PaginationWrapper>
          )}
          <div ref={docRef}>
            <Document
              file={{
                url: file,
                httpHeaders: {
                  "Access-Control-Allow-Origin": "*",
                },
              }}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              loading={
                <LoadingBlock
                  label="common.loading_pdf"
                  style={{ height: `${height}px` }}
                />
              }
              onLoadError={(err) => console.info(err.message)}
            >
              <Page pageNumber={page} width={width} />
            </Document>
          </div>
          {page && (
            <Styled.PaginationWrapper>
              <BasePagination
                page={page}
                pageCount={numPages}
                onSubmit={handleSubmit}
              />
              <AssetDownloadButton data={pdf} />
            </Styled.PaginationWrapper>
          )}
        </>
      ) : null}
    </Styled.Wrapper>
  );
}

type Props = {
  data?: AssetInlinePDFFragment$key | null;
};

const fragment = graphql`
  fragment AssetInlinePDFFragment on Asset {
    ... on AssetPDF {
      downloadUrl
    }
    ...AssetDownloadButtonFragment
  }
`;
