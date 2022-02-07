import React from "react";
import { Page } from "react-pdf";
import * as Styled from "./AssetInlinePDFNav.styles";

export default function AssetInlinePDFNav({ numPages, pageId }: Props) {
  return (
    <Styled.OutlineWrapper>
      <Styled.OutlineInner>
        {[...Array(numPages).keys()].map((page) => (
          <Styled.OutlineLink key={page} href={`#${pageId}${page + 1}`}>
            <Page pageNumber={page + 1} width={100} />
            <span>{page + 1}</span>
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
