import React from "react";
import { Page } from "react-pdf";
import * as Styled from "./AssetInlinePDFPages.styles";

export default function AssetInlinePDFPages({ numPages, width = 1159 }: Props) {
  return (
    <>
      {[...Array(numPages).keys()].map((page) => (
        <Styled.PageWrapper key={page} id={`page${page + 1}`}>
          <Styled.Page>
            <Page pageNumber={page + 1} width={width} />
          </Styled.Page>
          <Styled.PageNumber>Page {page + 1}</Styled.PageNumber>
        </Styled.PageWrapper>
      ))}
    </>
  );
}

interface Props {
  numPages: number;
  width?: number;
}
