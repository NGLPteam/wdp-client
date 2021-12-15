import React, { useEffect, useMemo, useRef, useState } from "react";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { convertToSlug } from "@wdp/lib/helpers";
import * as Styled from "./ArticleText.styles";
import { ContentImage } from "components/atomic";
import { BackToTopBlock } from "components/layout";
import { ArticleTextFragment$key } from "@/relay/ArticleTextFragment.graphql";

type TOCItem = {
  text: string;
  id: string;
};

export default function ArticleText({ data }: Props) {
  const article = useMaybeFragment(fragment, data);
  const fullText = useMemo(() => article?.bodyText?.fullText, [article]);
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

  function renderContent() {
    if (!fullText || !fullText.content) return;

    switch (fullText.kind) {
      case "HTML":
        return (
          <div
            className="t-rte"
            dangerouslySetInnerHTML={{ __html: fullText.content }}
          />
        );

      case "MARKDOWN":
        return (
          <ReactMarkdown className="t-rte">{fullText.content}</ReactMarkdown>
        );

      default:
        return <>{fullText.content}</>;
    }
  }

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
          <Styled.ImageBlock>
            <ContentImage data={article.thumbnail} />
          </Styled.ImageBlock>
          {renderContent()}
        </Styled.TextBlock>
      </Styled.BodyInner>
    </Styled.BodyWrapper>
  ) : (
    <Styled.BodyWrapper className="l-container-wide">
      No article content found.
    </Styled.BodyWrapper>
  );
}

interface Props {
  data?: ArticleTextFragment$key | null;
}

const fragment = graphql`
  fragment ArticleTextFragment on Item {
    thumbnail {
      ...ContentImageFragment
    }
    bodyText: schemaProperty(fullPath: "body") {
      ... on FullTextProperty {
        fullText {
          content
          kind
          lang
        }
        type
      }
    }
  }
`;
