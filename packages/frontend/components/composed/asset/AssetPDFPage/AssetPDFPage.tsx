import React from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./AssetPDFPage.styles";

export default function AssetInlinePDFPage({
  pageNumber,
  pageLabel = "list.page_number",
  children,
}: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Styled.Page>{children}</Styled.Page>
      {pageNumber && (
        <Styled.PageNumber>
          {pageLabel ? t(pageLabel, { number: pageNumber }) : pageNumber}
        </Styled.PageNumber>
      )}
    </>
  );
}

interface Props {
  /** Children, ie Page component */
  children: React.ReactNode;
  /** Page number */
  pageNumber?: number;
  /** Page label - i18n string  */
  pageLabel?: string;
}
