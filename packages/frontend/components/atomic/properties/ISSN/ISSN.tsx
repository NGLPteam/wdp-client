import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ISSNFragment$key } from "@/relay/ISSNFragment.graphql";

export default function ISSN({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return entity?.issn ? (
    <li className="l-flex l-flex--gap-sm">
      <span>{t("metadata.issn")}</span>
      <span className="t-copy-light">{entity.issn}</span>
    </li>
  ) : null;
}

interface Props {
  data?: ISSNFragment$key | null;
}

const fragment = graphql`
  fragment ISSNFragment on HasISSN {
    issn
  }
`;
