import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import * as Styled from "./EntityPageLayout.styles";
import { EntityPageLayoutFragment$key } from "@/relay/EntityPageLayoutFragment.graphql";
import { ContentImage } from "components/atomic";

export default function EntityPageLayout({ data }: Props) {
  const page = useMaybeFragment(fragment, data);

  return page ? (
    <Styled.Wrapper className="t-rte l-container-wide a-bg-neutral00">
      {page.heroImage && <ContentImage data={page.heroImage} />}
      <h3>{page.title}</h3>
      <ReactMarkdown>{page.body}</ReactMarkdown>
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
