import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "react-pdf";
import * as Styled from "./AssetPDFPage.styles";

type PageProps = React.ComponentProps<typeof Page>;

export default function AssetInlinePDFPage({
  pageNumber,
  width = 1159,
  pageLabel,
  renderPageNumber,
  renderAnnotationLayer,
  renderTextLayer,
}: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Styled.Page>
        <Page
          pageNumber={pageNumber}
          width={width}
          renderAnnotationLayer={renderAnnotationLayer}
          renderTextLayer={renderTextLayer}
        />
      </Styled.Page>
      {renderPageNumber && (
        <Styled.PageNumber>
          {pageLabel ? t(pageLabel, { number: pageNumber }) : pageNumber}
        </Styled.PageNumber>
      )}
    </>
  );
}

interface Props {
  /** Page number */
  pageNumber: number;
  /** Page width */
  width?: number;
  /** Show the page's number */
  renderPageNumber?: true;
  /** Page label - i18n string  */
  pageLabel?: string;
  /** react-pdf Page props */
  renderAnnotationLayer?: PageProps["renderAnnotationLayer"];
  renderTextLayer?: PageProps["renderTextLayer"];
}
