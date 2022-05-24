import React from "react";
import { useMaybeFragment, usePageContext } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import * as Styled from "./EntityPageLayout.styles";
import { EntityPageLayoutFragment$key } from "@/relay/EntityPageLayoutFragment.graphql";
import { ContentImage, LoadingBlock, Markdown } from "components/atomic";

export default function EntityPageLayout({ data }: Props) {
  const page = useMaybeFragment(fragment, data);

  const { loading } = usePageContext();

  return loading ? (
    <LoadingBlock />
  ) : page ? (
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
