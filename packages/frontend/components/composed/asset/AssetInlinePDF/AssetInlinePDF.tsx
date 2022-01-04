import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./AssetInlinePDF.styles";
import { AssetInlinePDFFragment$key } from "@/relay/AssetInlinePDFFragment.graphql";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AssetInlinePDF({ data }: Props) {
  const pdf = useMaybeFragment(fragment, data);
  const [numPages, setNumPages] = useState<number | null>(null);

  const getPages = numPages
    ? new Array(numPages).map((page) => <Page pageNumber={page} key={page} />)
    : null;

  return pdf.asset ? (
    <Styled.Wrapper>
      <Document
        file={pdf.asset.downloadUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading="Loading PDF..."
        onLoadError={(err) => console.info(err.message)}
      >
        {getPages}
      </Document>
    </Styled.Wrapper>
  ) : null;
}

type Props = {
  data?: AssetInlinePDFFragment$key | null;
};

const fragment = graphql`
  fragment AssetInlinePDFFragment on AssetProperty {
    asset {
      ... on AssetPDF {
        downloadUrl
      }
    }
  }
`;
