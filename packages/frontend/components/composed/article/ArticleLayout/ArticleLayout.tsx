import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ArticleHero from "../ArticleHero";
import ArticleParentHeader from "../ArticleParentHeader";
import ArticleContent from "../ArticleContent";
import { BreadcrumbsBar } from "components/layout";
import { ArticleLayoutFragment$key } from "@/relay/ArticleLayoutFragment.graphql";

export default function ArticleLayout({ data }: Props) {
  const article = useMaybeFragment(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={article} />
      <ArticleParentHeader data={article} />
      <ArticleHero data={article} />
      <ArticleContent data={article} />
    </>
  );
}

interface Props {
  data?: ArticleLayoutFragment$key | null;
}

const fragment = graphql`
  fragment ArticleLayoutFragment on Item {
    ...BreadcrumbsBarFragment
    ...ArticleParentHeaderFragment
    ...ArticleHeroFragment
    ...ArticleContentFragment
  }
`;
