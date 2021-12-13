import React, { useMemo } from "react";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleText.styles";
import { ArticleTextFragment$key } from "@/relay/ArticleTextFragment.graphql";
import { ContentImage } from "components/atomic";
import { BackToTopBlock } from "components/layout";

export default function ArticleText({ data }: Props) {
  const article = useMaybeFragment(fragment, data);
  const fullText = useMemo(() => article?.bodyText?.fullText, [article]);

  return article && fullText ? (
    <Styled.BodyWrapper as={BackToTopBlock} className="l-container-wide">
      <Styled.BodyInner>
        <Styled.TextBlock>
          <Styled.ImageBlock>
            <ContentImage data={article.thumbnail} />
          </Styled.ImageBlock>
          {fullText &&
            (fullText.content && fullText.kind === "HTML" ? (
              <div
                className="t-rte"
                dangerouslySetInnerHTML={{
                  __html: fullText.content,
                }}
              />
            ) : (
              fullText.content && (
                <ReactMarkdown className="t-rte">
                  {fullText.content}
                </ReactMarkdown>
              )
            ))}
        </Styled.TextBlock>
        <Styled.TOCBlock>
          <Styled.TOCHeader className="t-label-sm t-copy-light">
            Table of Contents
          </Styled.TOCHeader>
          <Styled.TOCList>
            <Styled.TOCListItem>Example Item</Styled.TOCListItem>
            <Styled.TOCListItem>Example Item</Styled.TOCListItem>
          </Styled.TOCList>
        </Styled.TOCBlock>
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
