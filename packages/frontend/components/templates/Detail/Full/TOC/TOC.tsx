import { useEffect, useState, RefObject } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { convertToSlug } from "@wdp/lib/helpers";
import styles from "./TOC.module.css";

type TOCItem = {
  text: string;
  id: string;
};

export default function TOC({
  textRef,
}: {
  textRef?: RefObject<HTMLDivElement | null>;
}) {
  const { t } = useTranslation();

  const [toc, setTOC] = useState<TOCItem[]>();

  useEffect(() => {
    const headerEls = textRef?.current?.querySelectorAll("h1, h2, h3");

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
  }, [textRef]);
  return toc ? (
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
  ) : null;
}
