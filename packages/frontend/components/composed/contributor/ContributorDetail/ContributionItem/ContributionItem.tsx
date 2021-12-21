import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ArrowLink, NamedLink } from "components/atomic";
import { ArticleSummary } from "components/layout";
import { ContributionItemFragment$key } from "@/relay/ContributionItemFragment.graphql";

export default function ContributionItem({ data }: Props) {
  const contribution = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  function renderReadMore() {
    return contribution?.slug ? (
      <NamedLink
        route="item"
        routeParams={{ slug: contribution.slug }}
        passHref
      >
        <ArrowLink className="t-label-sm" label={t("common.read_more")} />
      </NamedLink>
    ) : null;
  }

  return contribution ? (
    <ArticleSummary
      title={
        contribution.slug ? (
          <NamedLink
            route="item"
            routeParams={{ slug: contribution.slug }}
            passHref
          >
            <a>{contribution.title}</a>
          </NamedLink>
        ) : (
          contribution.title
        )
      }
      subtitle={contribution.subtitle}
      summary={
        contribution.summary && (
          <p className="t-copy-sm">{contribution.summary}</p>
        )
      }
      readMore={renderReadMore()}
    />
  ) : null;
}

interface Props {
  data?: ContributionItemFragment$key | null;
}

const fragment = graphql`
  fragment ContributionItemFragment on AnyEntity {
    ... on Sluggable {
      slug
    }
    ... on Collection {
      title
      subtitle
      slug
      summary
    }
    ... on Item {
      title
      subtitle
      slug
      summary
    }
  }
`;
