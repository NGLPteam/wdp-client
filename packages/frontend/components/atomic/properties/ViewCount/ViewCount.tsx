import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { IconFactory } from "components/factories";
import { ViewCountFragment$key } from "@/relay/ViewCountFragment.graphql";

export default function ViewCount({ data, className }: Props) {
  const summary = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return summary?.total ? (
    <li className={`l-flex l-flex--gap l-flex--gap-sm ${className || ""}`}>
      <IconFactory icon="view" role="presentation" />
      <span>{t("metadata.view_count", { count: summary.total })}</span>
    </li>
  ) : null;
}

interface Props {
  data?: ViewCountFragment$key | null;
  className?: string;
}

const fragment = graphql`
  fragment ViewCountFragment on AnalyticsEventCountSummary {
    total
  }
`;
