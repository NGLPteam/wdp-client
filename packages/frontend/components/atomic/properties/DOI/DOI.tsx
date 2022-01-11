import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { DOIFragment$key } from "@/relay/DOIFragment.graphql";

export default function DOI({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return entity?.doi ? (
    <div>
      {t("metadata.doi")}{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href={entity.doi}
        className="t-copy-light a-link"
      >
        {entity.doi}
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
