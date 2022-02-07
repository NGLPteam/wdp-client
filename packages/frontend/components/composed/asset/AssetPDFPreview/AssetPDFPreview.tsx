import React, { useState, useMemo, useCallback } from "react";
import { Document, pdfjs } from "react-pdf";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useIsMounted } from "@wdp/lib/hooks";
import AssetPDFPage from "../AssetPDFPage";
import { AssetPDFPreviewFragment$key } from "@/relay/AssetPDFPreviewFragment.graphql";
import { LoadingBlock } from "components/atomic";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AssetPDFPreview({ data }: Props) {
  const pdf = useMaybeFragment(fragment, data);

  const [numPages, setNumPages] = useState<number | null>(null);

  const file = useMemo(() => pdf?.downloadUrl, [pdf]);

  const isMounted = useIsMounted();

  const onLoadSuccess = useCallback(
    ({ numPages }) => {
      setNumPages(numPages);
    },
    [setNumPages]
  );

  return isMounted && file ? (
    <Document
      file={{
        url: file,
        httpHeaders: {
          "Access-Control-Allow-Origin": "*",
        },
      }}
      onLoadSuccess={onLoadSuccess}
      loading={<LoadingBlock label="common.loading_pdf" />}
      onLoadError={(err) => console.info(err.message)}
    >
      {numPages && <AssetPDFPage pageNumber={1} />}
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
