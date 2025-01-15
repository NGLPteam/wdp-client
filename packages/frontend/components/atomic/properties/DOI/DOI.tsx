import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { normalizeDoiUrl } from "helpers";
import { DOIFragment$key } from "@/relay/DOIFragment.graphql";

export default function DOI({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  if (!entity?.doi) return null;

  const doi = normalizeDoiUrl(entity.doi);

  return (
    <li>
      {t("metadata.doi")}{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href={doi.url}
        className="a-link"
        aria-label={t("metadata.doi_link")}
      >
        {doi.displayUrl}
        <span className="sr-only">{t("common.opens_new_window")}</span>
      </a>
    </li>
  );
}

interface Props {
  data?: DOIFragment$key | null;
}

const fragment = graphql`
  fragment DOIFragment on HasDOI {
    doi
  }
`;
