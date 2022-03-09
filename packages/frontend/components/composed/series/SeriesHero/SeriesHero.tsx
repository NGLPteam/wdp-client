import React from "react";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PrecisionDate } from "components/atomic";
import { SeriesHeroFragment$key } from "@/relay/SeriesHeroFragment.graphql";
import ArticleParentHeader from "components/composed/article/ArticleParentHeader";
import { PrimaryHero } from "components/layout/hero";

export default function SeriesHero({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  return entity ? (
    <>
      <ArticleParentHeader data={entity} />
      <PrimaryHero
        title={entity.title}
        subtitle={
          entity.subtitle && <h4 className="t-copy-italic">entity.subtitle</h4>
        }
        LeftComponent={
          <>
            {entity.published?.value && (
              <PrecisionDate data={entity.published} label="common.published" />
            )}
            {entity.about?.content && (
              <ReactMarkdown className="t-rte" rehypePlugins={[rehypeRaw]}>
                {entity.about.content}
              </ReactMarkdown>
            )}
          </>
        }
      />
    </>
  ) : null;
}

interface Props {
  data?: SeriesHeroFragment$key | null;
}

const fragment = graphql`
  fragment SeriesHeroFragment on Collection {
    slug
    title
    subtitle

    published {
      ...PrecisionDateFragment
      value
    }

    about: schemaProperty(fullPath: "about") {
      ... on MarkdownProperty {
        content
      }
    }

    ...ArticleParentHeaderFragment

    thumbnail {
      storage
      ...ContentImageFragment
    }
  }
`;
