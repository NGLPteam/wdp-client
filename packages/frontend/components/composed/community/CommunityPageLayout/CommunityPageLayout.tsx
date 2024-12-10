"use client";

import { useFragment } from "react-relay";
import classNames from "classnames";
import useIsMounted from "@wdp/lib/hooks/useIsMounted";
import { graphql } from "react-relay";
import { HeroImage, LoadingBlock, Markdown } from "components/atomic";
import { CommunityPageLayoutFragment$key } from "@/relay/CommunityPageLayoutFragment.graphql";
import styles from "./CommunityPageLayout.module.css";

export default function CommunityPageLayout({ data }: Props) {
  const page = useFragment(fragment, data);

  const isMounted = useIsMounted();

  return page ? (
    <section className="a-bg-custom10">
      <HeroImage data={page.heroImage} metadata={page.heroImageMetadata} />
      <div className="l-container-wide">
        <div className={classNames("t-rte", styles.content)}>
          <h2>{page.title}</h2>
          {isMounted ? (
            <Markdown.Page>{page.body}</Markdown.Page>
          ) : (
            <div className={classNames("t-rte", styles.loading)}>
              <LoadingBlock />
            </div>
          )}
        </div>
      </div>
    </section>
  ) : (
    <LoadingBlock className="a-bg-custom10" />
  );
}

interface Props {
  data?: CommunityPageLayoutFragment$key | null;
}

const fragment = graphql`
  fragment CommunityPageLayoutFragment on Page {
    title
    body
    heroImage {
      ...HeroImageFragment
    }
    heroImageMetadata {
      ...HeroImageMetadataFragment
    }
  }
`;
