import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ArticleLayout from "../ArticleLayout";
import ArticleText from "../ArticleText";
import { ArticleContentLayoutFragment$key } from "@/relay/ArticleContentLayoutFragment.graphql";

export default function ArticleContentLayout({ data }: Props) {
  const article = useMaybeFragment(fragment, data);

  return (
    <ArticleLayout data={article}>
      <ArticleText data={article} />
    </ArticleLayout>
  );
}

interface Props {
  /* Item data */
  data?: ArticleContentLayoutFragment$key | null;
}

const fragment = graphql`
  fragment ArticleContentLayoutFragment on Item {
    ...ArticleLayoutFragment
    ...ArticleTextFragment
  }
`;
