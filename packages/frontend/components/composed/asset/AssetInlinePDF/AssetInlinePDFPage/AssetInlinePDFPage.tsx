import React, { useState } from "react";
import { Page } from "react-pdf";
import { useInView } from "react-intersection-observer";
import { LoadingBlock } from "components/atomic";
import AssetPDFPage from "../../AssetPDFPage";

export default function AssetInlinePDFPage({
  pageNumber,
  pageId,
}: {
  pageNumber: number;
  pageId?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  const onRenderSuccess = () => setLoaded(true);

  const { ref, inView } = useInView({ rootMargin: "200px" });

  return (
    <div
      id={`${pageId}${pageNumber}`}
      ref={ref}
      style={{ height: loaded ? "auto" : `${1159 / 2}px` }}
    >
      {(inView || loaded) && (
        <AssetPDFPage pageNumber={pageNumber}>
          <Page
            key={`page_${pageNumber}`}
            pageNumber={pageNumber}
            width={1159}
            onRenderSuccess={onRenderSuccess}
            loading={<LoadingBlock />}
          />
        </AssetPDFPage>
      )}
    </div>
  );
}
