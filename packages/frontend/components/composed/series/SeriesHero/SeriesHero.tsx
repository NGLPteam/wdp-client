import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { Markdown, PrecisionDate, Alert } from "components/atomic";
import { SeriesHeroFragment$key } from "@/relay/SeriesHeroFragment.graphql";
import ArticleParentHeader from "components/composed/article/ArticleParentHeader";
import { PrimaryHero } from "components/layout/hero";

export default function SeriesHero({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const visibilityMessage =
    entity?.visibility === "HIDDEN" || entity?.currentlyHidden
      ? t("messages.hidden", { schema: t("schema.nglp.series") })
      : null;

  return entity ? (
    <>
      <ArticleParentHeader data={entity} />
      <PrimaryHero
        Alert={
          visibilityMessage && (
            <Alert message={visibilityMessage} badge color="blue" />
          )
        }
        title={<Markdown.Title>{entity.title}</Markdown.Title>}
        subtitle={
          entity.subtitle && (
            <h4 className="t-copy-italic">
              <Markdown.Title>{entity.subtitle}</Markdown.Title>
            </h4>
          )
        }
        LeftComponent={
          <>
            {entity.published?.value && (
              <PrecisionDate data={entity.published} />
            )}
            {entity.about?.content && (
              <Markdown.Summary className="t-rte">
                {entity.about.content}
              </Markdown.Summary>
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
    visibility
    currentlyHidden

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
