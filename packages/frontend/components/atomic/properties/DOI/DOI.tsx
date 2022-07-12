import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { DOIFragment$key } from "@/relay/DOIFragment.graphql";

export default function DOI({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  if (!entity?.doi) return null;

  let displayUrl = "";
  let finalUrl = "";

  // Normalize the URL and display text
  if (entity.doi.startsWith("https://doi.org/")) {
    finalUrl = entity.doi;
    displayUrl = entity.doi.replace("https://doi.org/", "");
  } else {
    finalUrl = `https://doi.org/${entity.doi}`;
    displayUrl = entity.doi;
  }

  return finalUrl ? (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={finalUrl}
        className="a-link"
        aria-label={t("metadata.doi_link")}
      >
        {displayUrl}
        <span className="a-hidden">{t("common.opens_new_window")}</span>
      </a>
    </div>
  ) : null;
}

interface Props {
  data?: DOIFragment$key | null;
}

const fragment = graphql`
  fragment DOIFragment on HasDOI {
    doi
  }
`;
