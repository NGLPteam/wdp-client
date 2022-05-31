import React from "react";
import { Page } from "react-pdf";
import * as Styled from "./AssetPDFPage.styles";

type PageProps = React.ComponentProps<typeof Page>;

export default function AssetInlinePDFPage({
  pageNumber,
  width = 1159,
  pageLabel,
  renderAnnotationLayer,
  renderTextLayer,
}: Props) {
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
      {pageLabel && <Styled.PageNumber>{pageLabel}</Styled.PageNumber>}
    </>
  );
}

interface Props {
  /** Page number */
  pageNumber: number;
  /** Page width */
  width?: number;
  /** Page label */
  pageLabel?: React.ReactNode;
  /** react-pdf Page props */
  renderAnnotationLayer?: PageProps["renderAnnotationLayer"];
  renderTextLayer?: PageProps["renderTextLayer"];
}
