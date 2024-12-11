import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import IconFactory from "@/components/factories/IconFactory";
import { PeerReviewedFragment$key } from "@/relay/PeerReviewedFragment.graphql";

export default function PeerReviewed({ data, className }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return entity?.peerReviewed?.checked ||
    entity?.peerReviewed?.checkedByDefault ? (
    <div className={`l-flex l-flex--gap l-flex--gap-sm ${className || ""}`}>
      <IconFactory icon="user" role="presentation" />
      <span>{t("metadata.peer_reviewed")}</span>
    </div>
  ) : null;
}

interface Props {
  data?: PeerReviewedFragment$key | null;
  className?: string;
}

const fragment = graphql`
  fragment PeerReviewedFragment on SchemaInstance {
    peerReviewed: schemaProperty(fullPath: "peer_reviewed") {
      ... on BooleanProperty {
        checked
        checkedByDefault
      }
    }
  }
`;
