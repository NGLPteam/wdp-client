import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { IconFactory } from "components/factories";
import { OpenAccessFragment$key } from "@/relay/OpenAccessFragment.graphql";

export default function OpenAccess({ data, className }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return entity?.openAccess?.checked || entity?.openAccess?.checkedByDefault ? (
    <div className={`l-flex l-flex--gap l-flex--gap-sm ${className || ""}`}>
      <IconFactory icon="openLock" role="presentation" />
      <span>{t("metadata.open_access")}</span>
    </div>
  ) : null;
}

interface Props {
  data?: OpenAccessFragment$key | null;
  className?: string;
}

const fragment = graphql`
  fragment OpenAccessFragment on SchemaInstance {
    openAccess: schemaProperty(fullPath: "open_access") {
      ... on BooleanProperty {
        checked
        checkedByDefault
      }
    }
  }
`;
