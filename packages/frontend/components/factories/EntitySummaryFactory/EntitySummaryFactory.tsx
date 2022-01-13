import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import IssueSummary from "components/composed/issue/IssueSummary";
import ArticleSummary from "components/composed/article/ArticleSummary";
import EntitySummary from "components/composed/entity/EntitySummary";
import { EntitySummaryFactoryFragment$key } from "@/relay/EntitySummaryFactoryFragment.graphql";
import VolumeSummary from "components/composed/volume/VolumeSummary";

export default function EntitySummaryFactory({ data, ...props }: Props) {
  const entity = useMaybeFragment(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "journal_article":
      return <ArticleSummary data={entity} {...props} />;

    case "journal_issue":
      return <IssueSummary data={entity} {...props} />;

    case "journal_volume":
      return <VolumeSummary data={entity} {...props} />;

    default:
      return <EntitySummary data={entity} {...props} />;
  }
}

interface Props {
  data?: EntitySummaryFactoryFragment$key | null;
}

const fragment = graphql`
  fragment EntitySummaryFactoryFragment on Entity
  @argumentDefinitions(showJournal: { type: "Boolean", defaultValue: false }) {
    schemaDefinition {
      identifier
    }
    ...EntitySummaryFragment
    ...ArticleSummaryFragment @arguments(showJournal: true)
    ...IssueSummaryFragment @arguments(showJournal: true)
    ...VolumeSummaryFragment @arguments(showJournal: true)
  }
`;
