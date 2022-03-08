import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import * as Styled from "./EntityPageLayout.styles";
import { EntityPageLayoutFragment$key } from "@/relay/EntityPageLayoutFragment.graphql";
import { ContentImage } from "components/atomic";

export default function EntityPageLayout({ data }: Props) {
  const page = useMaybeFragment(fragment, data);

  return page ? (
    <Styled.Wrapper className="l-container-wide a-bg-neutral00">
      <Styled.Inner className="t-rte">
        {page.heroImage && <ContentImage data={page.heroImage} />}
        <h3>{page.title}</h3>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: "h3",
            h2: "h4",
            h3: "h5",
            h4: "h6",
            h5: "h6",
          }}
        >
          {page.body}
        </ReactMarkdown>
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
