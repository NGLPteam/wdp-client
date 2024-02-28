import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { CompactHero } from "components/layout/hero";
import { Markdown } from "components/atomic";
import { getEntityDisplayName } from "helpers";
import { ArticleParentHeaderFragment$key } from "@/relay/ArticleParentHeaderFragment.graphql";

export default function ArticleParentHeader({ data }: Props) {
  const article = useMaybeFragment(fragment, data);

  const subtitleComponent = article?.issue ? (
    <Markdown.Title>{getEntityDisplayName(article.issue)}</Markdown.Title>
  ) : (
    <>
      {article?.series && (
        <Markdown.Title>{article.series.title}</Markdown.Title>
      )}
    </>
  );

  return article ? (
    <CompactHero
      style="secondary"
      title={
        <Markdown.Title>
          {article.journal?.title || article.unit?.title}
        </Markdown.Title>
      }
      subtitle={subtitleComponent}
    />
  ) : null;
}

interface Props {
  data?: ArticleParentHeaderFragment$key | null;
}

const fragment = graphql`
  fragment ArticleParentHeaderFragment on Entity {
    schemaDefinition {
      identifier
    }

    ... on Item {
      journal: ancestorOfType(schema: "nglp:journal") {
        ... on Entity {
          title
        }
      }
      issue: ancestorOfType(schema: "nglp:journal_issue") {
        ...getEntityDisplayNameFragment

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
