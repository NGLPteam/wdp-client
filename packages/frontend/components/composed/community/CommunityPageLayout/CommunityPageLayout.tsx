import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import * as Styled from "./CommunityPageLayout.styles";
import { HeroImage } from "components/atomic";
import { CommunityPageLayoutFragment$key } from "@/relay/CommunityPageLayoutFragment.graphql";

export default function CommunityPageLayout({ data }: Props) {
  const page = useMaybeFragment(fragment, data);

  return page ? (
    <>
      <HeroImage data={page.heroImage} metadata={page.heroImageMetadata} />
      <header className="a-bg-custom10">
        <Styled.HeroInner className="l-container-wide">
          <h2>{page.title}</h2>
        </Styled.HeroInner>
      </header>
      <section className="a-bg-custom10">
        <div className="l-container-wide">
          <Styled.Content className="t-rte">
            <ReactMarkdown>{page.body}</ReactMarkdown>
          </Styled.Content>
        </div>
      </section>
    </>
  ) : null;
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
