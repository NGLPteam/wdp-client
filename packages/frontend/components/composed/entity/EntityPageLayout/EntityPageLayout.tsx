"use client";

import classNames from "classnames";
import useIsMounted from "@wdp/lib/hooks/useIsMounted";
import { graphql, useFragment } from "react-relay";
import { ContentImage, Markdown, LoadingBlock } from "components/atomic";
import { EntityPageLayoutFragment$key } from "@/relay/EntityPageLayoutFragment.graphql";
import styles from "./EntityPageLayout.module.css";

export default function EntityPageLayout({ data }: Props) {
  const page = useFragment(fragment, data);

  const isMounted = useIsMounted();

  return page ? (
    <section
      className={classNames(styles.wrapper, "l-container-wide a-bg-neutral00")}
    >
      <div className={classNames("t-rte", styles.inner)}>
        {page.heroImage && <ContentImage data={page.heroImage} />}
        <h2 className="t-h3">{page.title}</h2>
        {isMounted ? (
          <Markdown.Page>{page.body}</Markdown.Page>
        ) : (
          <div className={classNames("t-rte", styles.loading)}>
            <LoadingBlock />
          </div>
        )}
      </div>
    </section>
  ) : null;
}

interface Props {
  /* Item data */
  data?: EntityPageLayoutFragment$key | null;
  /* Child page content */
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment EntityPageLayoutFragment on Page {
    title
    body
    heroImage {
      storage
      ...ContentImageFragment
    }
  }
`;
