"use client";

import { useState, useRef, useCallback } from "react";
import { Document, pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";
import { ErrorBlock } from "components/layout";
import { useRouter } from "next/navigation";
import { Trans } from "react-i18next";
import { NoContent } from "components/layout";
import { BackToTopButton, LoadingBlock } from "components/atomic";
import AssetInlinePDFNav from "./AssetInlinePDFNav";
import AssetInlinePDFPage from "./AssetInlinePDFPage";
import styles from "./AssetInlinePDF.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type Props = {
  url?: string | null;
  size?: string | null;
};

export default function AssetInlinePDF({ url, size }: Props) {
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
    const scrollTop = window.scrollY + bounding.top;

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

  const fileMb = size ? parseInt(size, 10) / 1024 ** 2 : 0;

  if (!url) return <NoContent message={"common.no_content"} />;

  return fileMb > 100 ? (
    <NoContent
      message={
        <Trans
          i18nKey="asset.pdf_cannot_be_displayed"
          components={{
            downloadLink: (
              <a
                className="no-hover-shadow hover:text-neutral-90"
                style={{ marginInline: "5px" }}
                href={url || ""}
                download
              >
                Download it instead
              </a>
            ),
          }}
        />
      }
    />
  ) : (
    <div className={styles.wrapper} ref={wrapperRef}>
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={<LoadingBlock />}
        error={renderError}
      >
        <div className={styles.document}>
          <AssetInlinePDFNav
            numPages={numPages > 25 ? 25 : numPages}
            pageId="page"
            contentId="pdfContent"
          />
          <div className={styles.pages} id="pdfContent" tabIndex={-1}>
            {Array.from(new Array(numPages > 25 ? 25 : numPages), (_el, i) => {
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
                      <a
                        className="no-hover-shadow hover:text-neutral-90"
                        style={{
                          marginInlineStart: "5px",
                        }}
                        href={url || ""}
                        download
                      >
                        Download PDF
                      </a>
                    ),
                  }}
                />
              }
            />
            <div className={styles.backToTop}>
              <BackToTopButton onClick={handleBackToTop} />
            </div>
          </div>
        </div>
      </Document>
    </div>
  );
}
