import { graphql, readInlineData } from "relay-runtime";
import BreadcrumbsBar from "components/layout/BreadcrumbsBar";
import { ArticleLayoutFragment$key } from "@/relay/ArticleLayoutFragment.graphql";
import ArticleHero from "../ArticleHero";
import ArticleParentHeader from "../ArticleParentHeader";
import ArticleTabNav from "../ArticleTabNav";
import RelatedArticles from "../RelatedArticles";

export default function ArticleLayout({ data, children }: Props) {
  const article = readInlineData(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={article} />
      <ArticleParentHeader data={article} />
      <ArticleHero data={article} />
      <ArticleTabNav data={article} contentId="articleContent" />
      <div id="articleContent" tabIndex={-1} />
      {children}
      <RelatedArticles data={article?.relatedItems} />
    </>
  );
}

interface Props {
  /* Item data */
  data: ArticleLayoutFragment$key | null;
  /* Child page content */
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment ArticleLayoutFragment on Item @inline {
    ...BreadcrumbsBarFragment
    ...ArticleParentHeaderFragment
    ...ArticleHeroFragment
    ...ArticleTabNavFragment
    relatedItems {
      ...RelatedArticlesFragment
    }
  }
`;
