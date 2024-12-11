import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./AssetPDFPage.module.css";

export default function AssetInlinePDFPage({
  pageNumber,
  pageLabel = "list.page_number",
  children,
}: Props) {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.page}>{children}</div>
      {pageNumber && (
        <div className={styles.pageNumber}>
          {pageLabel ? t(pageLabel, { number: pageNumber }) : pageNumber}
        </div>
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
