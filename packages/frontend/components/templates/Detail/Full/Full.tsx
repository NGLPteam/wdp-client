import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { graphql, useFragment } from "react-relay";
import { convertToSlug } from "@wdp/lib/helpers";
import { useTranslation } from "react-i18next";
import { ContentImage, FullText } from "components/atomic";
import { BackToTopBlock } from "components/layout";
import { FullDetailFragment$key } from "@/relay/FullDetailFragment.graphql";
import styles from "./Full.module.css";

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
    <BackToTopBlock className={styles.outer}>
      <div className={styles.inner}>
        {toc && (
          <div className={styles.toc}>
            <div className={styles["toc__inner"]}>
              <h3
                className={classNames(
                  "t-label-sm t-copy-light",
                  styles["toc__header"],
                )}
              >
                {t("glossary.table_of_contents")}
              </h3>
              <ul className={styles["toc__list"]}>
                {toc.map(({ id, text }, i: number) => (
                  <li className={styles["toc__item"]} key={i}>
                    <a href={`#${id}`}>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className={styles.text} ref={textEl}>
          {showHeroImage && thumbnail?.storage && (
            <div className={styles.image}>
              <ContentImage data={thumbnail} />
            </div>
          )}
          <FullText data={fullText} />
        </div>
      </div>
    </BackToTopBlock>
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
