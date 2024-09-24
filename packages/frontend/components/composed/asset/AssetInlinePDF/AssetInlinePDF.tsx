"use client";

import { useState, useRef, useCallback } from "react";
import { Document, pdfjs } from "react-pdf";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Trans, useTranslation } from "react-i18next";
import { ErrorBlock, NoContent } from "components/layout";
import { BackToTopButton, LoadingBlock } from "components/atomic";
import { useRouter } from "next/navigation";
import { AssetInlinePDFFragment$key } from "@/relay/AssetInlinePDFFragment.graphql";
import * as Styled from "./AssetInlinePDF.styles";
import AssetInlinePDFNav from "./AssetInlinePDFNav";
import AssetInlinePDFPage from "./AssetInlinePDFPage";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AssetInlinePDF({ data }: Props) {
  const pdf = useMaybeFragment(fragment, data);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const { t } = useTranslation();

  const [state, setState] = useState<{
    numPages: number;
    error?: Error;
  }>({
    numPages: 0,
    error: undefined,
  });

  const renderError = useCallback(() => {
    const message =
      state.error && "status" in state.error
        ? t("asset.pdf_server_error", { code: state.error?.status })
        : t("asset.pdf_render_error");
    const heading =
      state.error && "status" in state.error ? t("messages.error") : undefined;

    // Log error
    console.error("Error rendering PDF", state.error);

    return (
      <ErrorBlock heading={heading} message={message} reset={router.refresh} />
    );
  }, [state, t, router]);

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
      error: undefined,
    });

  const onDocumentLoadError = (error: Error) =>
    setState({
      numPages: 0,
      error,
    });

  const { numPages } = state;

  const fileMb = pdf?.fileSize ? pdf.fileSize / 1024 ** 2 : 0;

  if (!pdf?.downloadUrl) return <NoContent message={"common.no_content"} />;

  return fileMb > 100 ? (
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
        file={pdf.downloadUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<LoadingBlock />}
        error={renderError}
      >
        <Styled.DocumentWrapper>
          <AssetInlinePDFNav
            numPages={numPages > 25 ? 25 : numPages}
            pageId="page"
            contentId="pdfContent"
          />
          <Styled.PagesWrapper id="pdfContent" tabIndex={-1}>
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
