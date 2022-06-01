import React, { useState, useMemo, useRef } from "react";
import { Document, pdfjs } from "react-pdf";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./AssetInlinePDF.styles";
import AssetInlinePDFNav from "./AssetInlinePDFNav";
import AssetInlinePDFPages from "./AssetInlinePDFPages";
import { NoContent } from "components/layout";
import { BackToTopButton, LoadingBlock } from "components/atomic";
import { AssetInlinePDFFragment$key } from "@/relay/AssetInlinePDFFragment.graphql";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AssetInlinePDF({ data }: Props) {
  const pdf = useMaybeFragment(fragment, data);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const file = useMemo(
    () => ({
      url: pdf?.downloadUrl,
      httpHeaders: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
    [pdf]
  );

  const [state, setState] = useState<{
    numPages: number;
  }>({
    numPages: 0,
  });

  const handleBackToTop = () => {
    if (!wrapperRef || !wrapperRef.current || !document) return;
    const bounding = wrapperRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset + bounding.top;

    // Scroll to top
    document.body.scrollTop = scrollTop; // For Safari
    document.documentElement.scrollTop = scrollTop; // For Chrome, Firefox, IE and Opera
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) =>
    setState({
      numPages,
    });

  const { numPages } = state;

  return file ? (
    <Styled.Wrapper ref={wrapperRef}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<LoadingBlock />}
      >
        <Styled.DocumentWrapper>
          <AssetInlinePDFNav numPages={numPages} pageId="page" />
          <Styled.PagesWrapper>
            <AssetInlinePDFPages numPages={numPages} pageId="page" />
            <Styled.BackToTopWrapper>
              <BackToTopButton onClick={handleBackToTop} />
            </Styled.BackToTopWrapper>
          </Styled.PagesWrapper>
        </Styled.DocumentWrapper>
      </Document>
    </Styled.Wrapper>
  ) : (
    <NoContent />
  );
}

type Props = {
  data?: AssetInlinePDFFragment$key | null;
};

const fragment = graphql`
  fragment AssetInlinePDFFragment on Asset {
    ... on AssetPDF {
      downloadUrl
    }
    ...AssetDownloadButtonFragment
  }
`;
