import React, { useEffect, useMemo, useRef, useState } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { convertToSlug } from "@wdp/lib/helpers";
import * as Styled from "./ArticleText.styles";
import { ContentImage, FullText } from "components/atomic";
import { BackToTopBlock } from "components/layout";
import { ArticleTextFragment$key } from "@/relay/ArticleTextFragment.graphql";
import AssetInlinePDF from "components/composed/asset/AssetInlinePDF";

type TOCItem = {
  text: string;
  id: string;
};

export default function ArticleText({ data }: Props) {
  const article = useMaybeFragment(fragment, data);
  const fullText = useMemo(() => article?.bodyText?.fullText, [article]);
  const pdf = useMemo(() => article?.pdf, [article]);
  const [toc, setTOC] = useState<TOCItem[]>();
  const textEl = useRef<HTMLDivElement>(null);

  /* Get all headers and set table of contents */
  useEffect(() => {
    const headerEls = textEl.current?.querySelectorAll("h1, h2, h3");

    if (!headerEls || headerEls.length === 0) return;

    const tocList: TOCItem[] = [];

    [...headerEls].forEach((header) => {
      const text = header.textContent;

      if (!text) return;

      const id = convertToSlug(text);
      header.setAttribute("id", id);
      tocList.push({ text, id });
    });

    setTOC(tocList);
  }, [textEl]);

  return article && fullText ? (
    <Styled.BodyWrapper as={BackToTopBlock} className="l-container-wide">
      <Styled.BodyInner>
        {toc && (
          <Styled.TOCBlock>
            <Styled.TOCInner>
              <Styled.TOCHeader className="t-label-sm t-copy-light">
                Table of Contents
              </Styled.TOCHeader>
              <Styled.TOCList>
                {toc.map(({ id, text }, i: number) => (
                  <Styled.TOCListItem key={i}>
                    <a href={`#${id}`}>{text}</a>
                  </Styled.TOCListItem>
                ))}
              </Styled.TOCList>
            </Styled.TOCInner>
          </Styled.TOCBlock>
        )}
        <Styled.TextBlock ref={textEl}>
          {article.thumbnail?.storage && (
            <Styled.ImageBlock>
              <ContentImage data={article.thumbnail} />
            </Styled.ImageBlock>
          )}
          <FullText data={article.bodyText} />
        </Styled.TextBlock>
      </Styled.BodyInner>
    </Styled.BodyWrapper>
  ) : (
    <Styled.BodyWrapper className="l-container-wide">
      {pdf ? <AssetInlinePDF data={pdf} /> : "No article content found."}
    </Styled.BodyWrapper>
  );
}

interface Props {
  data?: ArticleTextFragment$key | null;
}

const fragment = graphql`
  fragment ArticleTextFragment on Item {
    thumbnail {
      storage
      ...ContentImageFragment
    }
    bodyText: schemaProperty(fullPath: "body") {
      ... on FullTextProperty {
        fullText {
          content
        }
      }
      ...FullTextFragment
    }
    pdf: schemaProperty(fullPath: "pdf_version") {
      ... on AssetProperty {
        ...AssetInlinePDFFragment
      }
    }
  }
`;
