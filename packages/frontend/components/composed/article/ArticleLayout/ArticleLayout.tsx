import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ArticleHero from "../ArticleHero";
import ArticleParentHeader from "../ArticleParentHeader";
import ArticleTabNav from "../ArticleTabNav";
import RelatedArticles from "../RelatedArticles";
import * as Styled from "./ArticleLayout.styles";
import { BreadcrumbsBar } from "components/layout";
import { ArticleLayoutFragment$key } from "@/relay/ArticleLayoutFragment.graphql";

export default function ArticleLayout({ data, children }: Props) {
  const article = useMaybeFragment(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={article} />
      <ArticleParentHeader data={article} />
      <ArticleHero data={article} />
      <Styled.ContentBlock>
        <ArticleTabNav data={article} />
        {children}
      </Styled.ContentBlock>
      <RelatedArticles data={article?.relatedItems} />
    </>
  );
}

interface Props {
  /* Item data */
  data?: ArticleLayoutFragment$key | null;
  /* Child page content */
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment ArticleLayoutFragment on Item {
    ...BreadcrumbsBarFragment
    ...ArticleParentHeaderFragment
    ...ArticleHeroFragment
    ...ArticleTabNavFragment
    relatedItems {
      ...RelatedArticlesFragment
    }
  }
`;
