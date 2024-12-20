"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { convertToSlug } from "@wdp/lib/helpers";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { ContentImage, FullText } from "components/atomic";
import { BackToTopBlock, NoContent } from "components/layout";
import { ArticleTextFragment$key } from "@/relay/ArticleTextFragment.graphql";
import * as Styled from "./ArticleText.styles";

const AssetInlinePDF = dynamic(
  () => import("components/composed/asset/AssetInlinePDF"),
  { ssr: false },
);

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
  const { t } = useTranslation();

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
      {pdf?.asset ? (
        <AssetInlinePDF data={pdf.asset} />
      ) : (
        <NoContent message={t("common.no_content")} />
      )}
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
        asset {
          ...AssetInlinePDFFragment
        }
      }
    }
  }
`;
