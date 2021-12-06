import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ArticleHero from "../ArticleHero";
import ArticleParentHeader from "../ArticleParentHeader";
import ArticleTabNav from "../ArticleTabNav";
import ArticleText from "../ArticleText";
import * as Styled from "./ArticleLayout.styles";
import { BreadcrumbsBar } from "components/layout";
import { ArticleLayoutFragment$key } from "@/relay/ArticleLayoutFragment.graphql";
import EntityHTMLHead from "components/composed/entity/EntityHTMLHead";

export default function ArticleLayout({ data, children }: Props) {
  const article = useMaybeFragment(fragment, data);

  return (
    <>
      <EntityHTMLHead data={article} />
      <BreadcrumbsBar data={article} />
      <ArticleParentHeader data={article} />
      <ArticleHero data={article} />
      <section className="a-bg-neutral00">
        <Styled.SectionInner className="l-container-wide">
          <ArticleTabNav data={article} />
          {children || <ArticleText data={article} />}
        </Styled.SectionInner>
      </section>
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
    ...EntityHTMLHeadFragment
    ...BreadcrumbsBarFragment
    ...ArticleParentHeaderFragment
    ...ArticleHeroFragment
    ...ArticleTabNavFragment
    ...ArticleTextFragment
  }
`;
