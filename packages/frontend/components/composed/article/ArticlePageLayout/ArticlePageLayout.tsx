import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ArticleLayout from "../ArticleLayout";
import { ArticlePageLayoutFragment$key } from "@/relay/ArticlePageLayoutFragment.graphql";

export default function ArticlePageLayout({ data }: Props) {
  const article = useMaybeFragment(fragment, data);

  return (
    <ArticleLayout data={article}>
      {article?.page && (
        <div className="t-rte">
          <h3>{article.page.title}</h3>
          <div>{article.page.body}</div>
        </div>
      )}
    </ArticleLayout>
  );
}

interface Props {
  /* Item data */
  data?: ArticlePageLayoutFragment$key | null;
  /* Child page content */
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment ArticlePageLayoutFragment on Item {
    ...ArticleLayoutFragment
    page(slug: $pageSlug) {
      title
      body
    }
  }
`;
