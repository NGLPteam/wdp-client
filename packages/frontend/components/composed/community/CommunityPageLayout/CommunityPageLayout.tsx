"use client";

import { useMaybeFragment } from "@wdp/lib/api/hooks";
import useIsMounted from "@wdp/lib/hooks/useIsMounted";
import { graphql } from "react-relay";
import { HeroImage, LoadingBlock, Markdown } from "components/atomic";
import { CommunityPageLayoutFragment$key } from "@/relay/CommunityPageLayoutFragment.graphql";
import * as Styled from "./CommunityPageLayout.styles";

export default function CommunityPageLayout({ data }: Props) {
  const page = useMaybeFragment(fragment, data);

  const isMounted = useIsMounted();

  return page ? (
    <section className="a-bg-custom10">
      <HeroImage data={page.heroImage} metadata={page.heroImageMetadata} />
      <div className="l-container-wide">
        <Styled.Content className="t-rte">
          <h2>{page.title}</h2>
          {isMounted ? (
            <Markdown.Page>{page.body}</Markdown.Page>
          ) : (
            <Styled.LoadingWrapper className="t-rte">
              <LoadingBlock />
            </Styled.LoadingWrapper>
          )}
        </Styled.Content>
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
