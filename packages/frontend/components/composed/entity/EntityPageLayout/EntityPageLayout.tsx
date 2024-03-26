"use client";

import { useMaybeFragment } from "@wdp/lib/api/hooks";
import useIsMounted from "@wdp/lib/hooks/useIsMounted";
import { graphql } from "react-relay";
import { ContentImage, Markdown, LoadingBlock } from "components/atomic";
import { EntityPageLayoutFragment$key } from "@/relay/EntityPageLayoutFragment.graphql";
import * as Styled from "./EntityPageLayout.styles";

export default function EntityPageLayout({ data }: Props) {
  const page = useMaybeFragment(fragment, data);

  const isMounted = useIsMounted();

  return page ? (
    <Styled.Wrapper className="l-container-wide a-bg-neutral00">
      <Styled.Inner className="t-rte">
        {page.heroImage && <ContentImage data={page.heroImage} />}
        <h3>{page.title}</h3>
        {isMounted ? (
          <Markdown.Page>{page.body}</Markdown.Page>
        ) : (
          <Styled.LoadingWrapper className="t-rte">
            <LoadingBlock />
          </Styled.LoadingWrapper>
        )}
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
