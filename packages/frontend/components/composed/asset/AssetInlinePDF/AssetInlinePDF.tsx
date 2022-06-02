import React, { useState, useMemo, useRef } from "react";
import { Document, pdfjs } from "react-pdf";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Trans } from "react-i18next";
import * as Styled from "./AssetInlinePDF.styles";
import AssetInlinePDFNav from "./AssetInlinePDFNav";
import AssetInlinePDFPage from "./AssetInlinePDFPage";
import { NoContent } from "components/layout";
import { BackToTopButton, LoadingBlock } from "components/atomic";
import { AssetInlinePDFFragment$key } from "@/relay/AssetInlinePDFFragment.graphql";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AssetInlinePDF({ data }: Props) {
  const pdf = useMaybeFragment(fragment, data);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const file = useMemo(
    () => ({
      url: pdf?.downloadUrl,
      httpHeaders: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
    [pdf]
  );

  const [state, setState] = useState<{
    numPages: number;
  }>({
    numPages: 0,
  });

  const handleBackToTop = () => {
    if (!wrapperRef || !wrapperRef.current || !document) return;
    const bounding = wrapperRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset + bounding.top;

    // Scroll to top
    document.body.scrollTop = scrollTop; // For Safari
    document.documentElement.scrollTop = scrollTop; // For Chrome, Firefox, IE and Opera
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) =>
    setState({
      numPages,
    });

  const { numPages } = state;

  const fileMb = pdf?.fileSize ? pdf.fileSize / 1024 ** 2 : 0;

  return !file ? (
    <NoContent message={"common.no_content"} />
  ) : fileMb > 100 ? (
    <NoContent
      message={
        <Trans
          i18nKey="asset.pdf_cannot_be_displayed"
          components={{
            downloadLink: (
              <a href={pdf?.downloadUrl || ""} download>
                link text
              </a>
            ),
          }}
        />
      }
    />
  ) : (
    <Styled.Wrapper ref={wrapperRef}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<LoadingBlock />}
      >
        <Styled.DocumentWrapper>
          <AssetInlinePDFNav
            numPages={numPages > 25 ? 25 : numPages}
            pageId="page"
          />
          <Styled.PagesWrapper>
            {Array.from(new Array(numPages > 25 ? 25 : numPages), (el, i) => {
              return (
                <AssetInlinePDFPage key={i} pageId="page" pageNumber={i + 1} />
              );
            })}
            <NoContent
              message={
                <Trans
                  i18nKey="asset.view_full_pdf"
                  components={{
                    downloadLink: (
                      <a href={pdf?.downloadUrl || ""} download>
                        link text
                      </a>
                    ),
                  }}
                />
              }
            />
            <Styled.BackToTopWrapper>
              <BackToTopButton onClick={handleBackToTop} />
            </Styled.BackToTopWrapper>
          </Styled.PagesWrapper>
        </Styled.DocumentWrapper>
      </Document>
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
      fileSize
    }
    ...AssetDownloadButtonFragment
  }
`;
