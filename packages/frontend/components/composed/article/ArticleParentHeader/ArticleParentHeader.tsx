import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ArticleParentHeaderFragment$key } from "@/relay/ArticleParentHeaderFragment.graphql";
import { CompactHero } from "components/layout/hero";

export default function ArticleParentHeader({ data }: Props) {
  const article = useMaybeFragment(fragment, data);

  const subtitleComponent = article?.issue ? (
    <>
      {article.issue && <span>{article.issue.title}</span>}
      {article.volume && (
        <span className="t-copy-lighter">
          &nbsp;&nbsp;{article.volume.title}
        </span>
      )}
    </>
  ) : (
    <>{article?.series && <span>{article.series.title}</span>}</>
  );

  return article ? (
    <CompactHero
      style="secondary"
      title={article.journal?.title || article.unit?.title}
      subtitle={subtitleComponent}
    />
  ) : null;
}

interface Props {
  data?: ArticleParentHeaderFragment$key | null;
}

const fragment = graphql`
  fragment ArticleParentHeaderFragment on Entity {
    ... on Item {
      journal: ancestorOfType(schema: "nglp:journal") {
        ... on Entity {
          title
        }
      }
      volume: ancestorOfType(schema: "nglp:journal_volume") {
        ... on Entity {
          title
        }
      }
      issue: ancestorOfType(schema: "nglp:journal_issue") {
        ... on Entity {
          title
        }
      }
      unit: ancestorOfType(schema: "nglp:unit") {
        ... on Entity {
          title
        }
      }
      series: ancestorOfType(schema: "nglp:series") {
        ... on Entity {
          title
        }
      }
      campus: ancestorOfType(schema: "nglp:campus") {
        ... on Entity {
          title
        }
      }
    }

    ... on Collection {
      unit: ancestorOfType(schema: "nglp:unit") {
        ... on Entity {
          title
        }
      }
      campus: ancestorOfType(schema: "nglp:campus") {
        ... on Entity {
          title
        }
      }
    }
  }
`;
