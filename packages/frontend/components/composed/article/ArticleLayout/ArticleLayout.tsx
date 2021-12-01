import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ArticleHero from "../ArticleHero";
import { BreadcrumbsBar } from "components/layout";
import { ArticleLayoutFragment$key } from "@/relay/ArticleLayoutFragment.graphql";

export default function ArticleLayout({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={issue} />
      <ArticleHero data={issue} />
    </>
  );
}

interface Props {
  data?: ArticleLayoutFragment$key | null;
}

const fragment = graphql`
  fragment ArticleLayoutFragment on Item {
    ...BreadcrumbsBarFragment
    ...ArticleHeroFragment
  }
`;
