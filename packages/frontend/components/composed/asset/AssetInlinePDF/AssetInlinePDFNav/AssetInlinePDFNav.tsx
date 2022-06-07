import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "react-pdf";
import AssetPDFPage from "../../AssetPDFPage";
import * as Styled from "./AssetInlinePDFNav.styles";
import SkipLink from "components/global/SkipLink";

export default function AssetInlinePDFNav({
  numPages,
  pageId,
  contentId,
}: Props) {
  const { t } = useTranslation();

  const [pagesRendered, setPagesRendered] = useState<number>(0);

  const onRenderSuccess = () => setPagesRendered(pagesRendered + 1);

  /**
   * The amount of pages we want to render now. Always 1 more than already rendered,
   * no more than total amount of pages in the document.
   */
  const pagesRenderedPlusOne = Math.min(pagesRendered + 1, numPages);

  return (
    <Styled.OutlineWrapper>
      <SkipLink toId={contentId} label={t("nav.skip_to_pdf_content")} />
      <Styled.OutlineInner as="ol">
        {Array.from(new Array(pagesRenderedPlusOne), (el, i) => {
          const isCurrentlyRendering = pagesRenderedPlusOne === i + 1;
          const isLastPage = numPages === i + 1;
          const needsCallbackToRenderNextPage =
            isCurrentlyRendering && !isLastPage;

          return (
            <li key={i}>
              <Styled.OutlineLink href={`#${pageId}${i + 1}`}>
                <AssetPDFPage pageNumber={i + 1}>
                  <Page
                    key={`page_${i + 1}`}
                    onRenderSuccess={
                      needsCallbackToRenderNextPage
                        ? onRenderSuccess
                        : undefined
                    }
                    pageNumber={i + 1}
                    width={100}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                  />
                </AssetPDFPage>
              </Styled.OutlineLink>
            </li>
          );
        })}
      </Styled.OutlineInner>
    </Styled.OutlineWrapper>
  );
}

interface Props {
  numPages: number;
  pageId: string;
  contentId: string;
}
