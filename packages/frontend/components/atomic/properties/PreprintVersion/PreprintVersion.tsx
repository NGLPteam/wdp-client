import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PreprintVersionFragment$key } from "@/relay/PreprintVersionFragment.graphql";

export default function PreprintVersion({ data, className }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return entity?.prePrintVersion?.checked ||
    entity?.prePrintVersion?.checkedByDefault ? (
    <div className={`l-flex l-flex--gap l-flex--gap-sm ${className || ""}`}>
      {t("metadata.preprint_version")}
    </div>
  ) : null;
}

interface Props {
  data?: PreprintVersionFragment$key | null;
  className?: string;
}

const fragment = graphql`
  fragment PreprintVersionFragment on SchemaInstance {
    prePrintVersion: schemaProperty(fullPath: "preprint_version") {
      ... on BooleanProperty {
        checked
        checkedByDefault
      }
    }
  }
`;
