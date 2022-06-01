import React, { useState } from "react";
import { Page } from "react-pdf";
import AssetPDFPage from "../../AssetPDFPage";

export default function AssetRenderPages({
  numPages,
  pageId,
}: {
  numPages: number;
  pageId?: string;
}) {
  const [state, setState] = useState<{
    pagesRendered: number;
  }>({
    pagesRendered: 0,
  });

  const onRenderSuccess = () =>
    setState({
      pagesRendered: state.pagesRendered + 1,
    });

  const { pagesRendered } = state;

  /**
   * The amount of pages we want to render now. Always 1 more than already rendered,
   * no more than total amount of pages in the document.
   */
  const pagesRenderedPlusOne = Math.min(pagesRendered + 1, numPages);

  return numPages ? (
    <>
      {Array.from(new Array(pagesRenderedPlusOne), (el, i) => {
        const isCurrentlyRendering = pagesRenderedPlusOne === i + 1;
        const isLastPage = numPages === i + 1;
        const needsCallbackToRenderNextPage =
          isCurrentlyRendering && !isLastPage;

        return (
          <div id={`${pageId}${i + 1}`}>
            <AssetPDFPage pageNumber={i + 1}>
              <Page
                key={`page_${i + 1}`}
                onRenderSuccess={
                  needsCallbackToRenderNextPage ? onRenderSuccess : undefined
                }
                pageNumber={i + 1}
                width={1159}
              />
            </AssetPDFPage>
          </div>
        );
      })}
    </>
  ) : null;
}
