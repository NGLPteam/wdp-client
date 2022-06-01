import React, { useState } from "react";
import { Page } from "react-pdf";
import AssetPDFPage from "../../AssetPDFPage";
import * as Styled from "./AssetInlinePDFNav.styles";

export default function AssetInlinePDFNav({ numPages, pageId }: Props) {
  const [pagesRendered, setPagesRendered] = useState<number>(0);

  const onRenderSuccess = () => setPagesRendered(pagesRendered + 1);

  /**
   * The amount of pages we want to render now. Always 1 more than already rendered,
   * no more than total amount of pages in the document.
   */
  const pagesRenderedPlusOne = Math.min(pagesRendered + 1, numPages);

  return (
    <Styled.OutlineWrapper>
      <Styled.OutlineInner>
        {Array.from(new Array(pagesRenderedPlusOne), (el, i) => {
          const isCurrentlyRendering = pagesRenderedPlusOne === i + 1;
          const isLastPage = numPages === i + 1;
          const needsCallbackToRenderNextPage =
            isCurrentlyRendering && !isLastPage;

          return (
            <Styled.OutlineLink key={i} href={`#${pageId}${i + 1}`}>
              <AssetPDFPage pageNumber={i + 1}>
                <Page
                  key={`page_${i + 1}`}
                  onRenderSuccess={
                    needsCallbackToRenderNextPage ? onRenderSuccess : undefined
                  }
                  pageNumber={i + 1}
                  width={100}
                />
              </AssetPDFPage>
            </Styled.OutlineLink>
          );
        })}
      </Styled.OutlineInner>
    </Styled.OutlineWrapper>
  );
}

interface Props {
  numPages: number;
  pageId: string;
}
