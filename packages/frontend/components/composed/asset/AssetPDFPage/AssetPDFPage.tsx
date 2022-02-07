import React from "react";
import { useTranslation } from "react-i18next";
import { Page } from "react-pdf";
import * as Styled from "./AssetPDFPage.styles";

export default function AssetInlinePDFPage({
  pageNumber,
  width = 1159,
  pageLabel,
  showPageNumber,
}: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Styled.Page>
        <Page pageNumber={pageNumber} width={width} />
      </Styled.Page>
      {showPageNumber && (
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
  showPageNumber?: true;
  /** Page label - i18n string  */
  pageLabel?: string;
}
