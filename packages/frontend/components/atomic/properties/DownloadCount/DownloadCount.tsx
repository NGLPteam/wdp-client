import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import IconFactory from "@/components/factories/IconFactory";
import { DownloadCountFragment$key } from "@/relay/DownloadCountFragment.graphql";

export default function DownloadCount({ data }: Props) {
  const summary = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return summary?.total ? (
    <li className="l-flex l-flex--gap">
      <IconFactory icon="download" role="presentation" />
      <span>{t("metadata.download_count", { count: summary.total })}</span>
    </li>
  ) : null;
}

interface Props {
  data?: DownloadCountFragment$key | null;
}

const fragment = graphql`
  fragment DownloadCountFragment on AnalyticsEventCountSummary {
    total
  }
`;
