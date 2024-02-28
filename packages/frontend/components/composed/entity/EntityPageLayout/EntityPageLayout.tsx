import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { ContentImage, Markdown } from "components/atomic";
import { EntityPageLayoutFragment$key } from "@/relay/EntityPageLayoutFragment.graphql";
import * as Styled from "./EntityPageLayout.styles";

export default function EntityPageLayout({ data }: Props) {
  const page = useMaybeFragment(fragment, data);

  return page ? (
    <Styled.Wrapper className="l-container-wide a-bg-neutral00">
      <Styled.Inner className="t-rte">
        {page.heroImage && <ContentImage data={page.heroImage} />}
        <h3>{page.title}</h3>
        <Markdown.Page>{page.body}</Markdown.Page>
      </Styled.Inner>
    </Styled.Wrapper>
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
      ...ContentImageFragment
    }
  }
`;
