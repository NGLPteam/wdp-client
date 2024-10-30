import { useEffect, useRef, useState } from "react";
import { graphql, useFragment } from "react-relay";
import { convertToSlug } from "@wdp/lib/helpers";
import { useTranslation } from "react-i18next";
import { ContentImage, FullText } from "components/atomic";
import { BackToTopBlock } from "components/layout";
import { FullDetailFragment$key } from "@/relay/FullDetailFragment.graphql";
import * as Styled from "./Full.styles";

type TOCItem = {
  text: string;
  id: string;
};

export default function FullVariant({
  data,
  showHeroImage,
}: {
  data?: FullDetailFragment$key | null;
  showHeroImage?: boolean | null;
}) {
  const entity = useFragment(fragment, data);

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

  if (!entity) return null;

  const { fullText, thumbnail } = entity ?? {};

  return entity && fullText ? (
    <Styled.BodyWrapper as={BackToTopBlock}>
      <Styled.BodyInner>
        {toc && (
          <Styled.TOCBlock>
            <Styled.TOCInner>
              <Styled.TOCHeader className="t-label-sm t-copy-light">
                {t("glossary.table_of_contents")}
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
          {showHeroImage && thumbnail?.storage && (
            <Styled.ImageBlock>
              <ContentImage data={thumbnail} />
            </Styled.ImageBlock>
          )}
          <FullText data={fullText} />
        </Styled.TextBlock>
      </Styled.BodyInner>
    </Styled.BodyWrapper>
  ) : null;
}

const fragment = graphql`
  fragment FullDetailFragment on AnyEntity {
    ... on Item {
      thumbnail {
        storage
        ...ContentImageFragment
      }
      fullText: schemaProperty(fullPath: "body") {
        ... on FullTextProperty {
          fullText {
            content
          }
        }
        ...FullTextFragment
      }
    }

    ... on Collection {
      thumbnail {
        storage
        ...ContentImageFragment
      }
      fullText: schemaProperty(fullPath: "description") {
        ... on FullTextProperty {
          fullText {
            content
          }
        }
        ...FullTextFragment
      }
    }
  }
`;
