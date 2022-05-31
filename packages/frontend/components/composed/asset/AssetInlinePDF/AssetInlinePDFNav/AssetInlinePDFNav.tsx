import React from "react";
import { useTranslation } from "react-i18next";
import AssetPDFPage from "../../AssetPDFPage";
import * as Styled from "./AssetInlinePDFNav.styles";

export default function AssetInlinePDFNav({ numPages, pageId }: Props) {
  const { t } = useTranslation();

  return (
    <Styled.OutlineWrapper>
      <Styled.OutlineInner>
        {[...Array(numPages).keys()].map((page) => (
          <Styled.OutlineLink key={page} href={`#${pageId}${page + 1}`}>
            <AssetPDFPage
              pageNumber={page + 1}
              width={100}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              pageLabel={
                <>
                  <span className="a-hidden">{t("list.page")}</span>
                  <span>{page + 1}</span>
                </>
              }
            />
          </Styled.OutlineLink>
        ))}
      </Styled.OutlineInner>
    </Styled.OutlineWrapper>
  );
}

interface Props {
  numPages: number;
  pageId: string;
}
