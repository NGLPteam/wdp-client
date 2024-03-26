"use client";

import { useMaybeFragment } from "@wdp/lib/api/hooks";
import useIsMounted from "@wdp/lib/hooks/useIsMounted";
import { graphql } from "react-relay";
import { ContentImage, Markdown, LoadingBlock } from "components/atomic";
import { IssuePageLayoutFragment$key } from "@/relay/IssuePageLayoutFragment.graphql";
import * as Styled from "./IssuePageLayout.styles";

export default function IssuePageLayout({ data }: Props) {
  const page = useMaybeFragment(fragment, data);

  const isMounted = useIsMounted();

  return page ? (
    <section className="t-rte">
      {page.heroImage && <ContentImage data={page.heroImage} />}
      <h3>{page.title}</h3>
      {isMounted ? (
        <Markdown.Page>{page.body}</Markdown.Page>
      ) : (
        <Styled.LoadingWrapper className="t-rte">
          <LoadingBlock />
        </Styled.LoadingWrapper>
      )}
    </section>
  ) : null;
}

interface Props {
  /* Item data */
  data?: IssuePageLayoutFragment$key | null;
  /* Child page content */
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment IssuePageLayoutFragment on Page {
    title
    body
    heroImage {
      ...ContentImageFragment
    }
  }
`;
