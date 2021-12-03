import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import ArticleTabNav from "../ArticleTabNav";
import * as Styled from "./ArticleContent.styles";
import { ArticleContentFragment$key } from "@/relay/ArticleContentFragment.graphql";

export default function ArticleContent({ data }: Props) {
  const article = useMaybeFragment(fragment, data);

  return article ? (
    <section className="a-bg-neutral00">
      <Styled.SectionInner className="l-container-wide">
        <ArticleTabNav data={article} />
      </Styled.SectionInner>
    </section>
  ) : null;
}

interface Props {
  data?: ArticleContentFragment$key | null;
}

const fragment = graphql`
  fragment ArticleContentFragment on Item {
    title
    ...ArticleTabNavFragment
  }
`;
