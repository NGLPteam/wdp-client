import React, { useState, useMemo, useRef, useCallback } from "react";
import { Document, pdfjs } from "react-pdf";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useIsMounted } from "@wdp/lib/hooks";
import { useTranslation } from "react-i18next";
import AssetPDFPage from "../AssetPDFPage";
import * as Styled from "./AssetInlinePDF.styles";
import AssetInlinePDFNav from "./AssetInlinePDFNav";
import { AssetInlinePDFFragment$key } from "@/relay/AssetInlinePDFFragment.graphql";
import { BackToTopButton, LoadingBlock } from "components/atomic";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AssetInlinePDF({ data }: Props) {
  const pdf = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const [numPages, setNumPages] = useState<number | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const file = useMemo(() => pdf?.downloadUrl, [pdf]);

  const isMounted = useIsMounted();

  const onLoadSuccess = useCallback(
    ({ numPages }) => {
      setNumPages(numPages);
    },
    [setNumPages]
  );

  const handleBackToTop = () => {
    if (!wrapperRef || !wrapperRef.current || !document) return;

    const bounding = wrapperRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset + bounding.top;

    // Scroll to top
    document.body.scrollTop = scrollTop; // For Safari
    document.documentElement.scrollTop = scrollTop; // For Chrome, Firefox, IE and Opera
  };

  return (
    <Styled.Wrapper ref={wrapperRef}>
      {isMounted && file ? (
        <Document
          file={{
            url: file,
            httpHeaders: {
              "Access-Control-Allow-Origin": "*",
            },
          }}
          onLoadSuccess={onLoadSuccess}
          loading={<LoadingBlock label="common.loading_pdf" />}
          onLoadError={(err) => console.info(err.message)}
        >
          {numPages && (
            <Styled.DocumentWrapper>
              {numPages > 1 && (
                <AssetInlinePDFNav numPages={numPages} pageId="page" />
              )}
              <Styled.PagesWrapper>
                {[...Array(numPages).keys()].map((page) => (
                  <div key={page} id={`page${page + 1}`}>
                    <AssetPDFPage
                      pageNumber={page + 1}
                      pageLabel={t("list.page_number", { number: page + 1 })}
                    />
                  </div>
                ))}
                {numPages > 1 && (
                  <Styled.BackToTopWrapper>
                    <BackToTopButton onClick={handleBackToTop} />
                  </Styled.BackToTopWrapper>
                )}
              </Styled.PagesWrapper>
            </Styled.DocumentWrapper>
          )}
        </Document>
      ) : (
        t("common.no_content")
      )}
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
