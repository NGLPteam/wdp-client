import { useState, useRef } from "react";
import { Document, pdfjs } from "react-pdf";
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

  const [state, setState] = useState<{
    numPages: number;
  }>({
    numPages: 0,
  });

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
              <a href={url || ""} download>
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
        loading={<LoadingBlock />}
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
                      <a href={url || ""} download>
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
