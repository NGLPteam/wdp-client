import React, { useState, useMemo, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useIsMounted } from "@wdp/lib/hooks";
import { LoadingBlock } from "components/atomic";
import { AssetPDFPreviewFragment$key } from "@/relay/AssetPDFPreviewFragment.graphql";
import AssetPDFPage from "../AssetPDFPage";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AssetPDFPreview({ data }: Props) {
  const pdf = useMaybeFragment(fragment, data);

  const [numPages, setNumPages] = useState<number | null>(null);

  const file = useMemo(() => pdf?.downloadUrl, [pdf]);

  const isMounted = useIsMounted();

  const onLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
    },
    [setNumPages],
  );

  return isMounted && file ? (
    <Document
      file={file}
      onLoadSuccess={onLoadSuccess}
      loading={<LoadingBlock />}
      onLoadError={(err) => console.info(err.message)}
    >
      {numPages && (
        <AssetPDFPage>
          <Page pageNumber={1} width={1159} />
        </AssetPDFPage>
      )}
    </Document>
  ) : null;
}

type Props = {
  data?: AssetPDFPreviewFragment$key | null;
};

const fragment = graphql`
  fragment AssetPDFPreviewFragment on Asset {
    ... on AssetPDF {
      downloadUrl
    }
  }
`;
