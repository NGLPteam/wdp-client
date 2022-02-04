import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ButtonControlDrawer } from "components/atomic";
import { CollectionCreateButtonFragment$key } from "@/relay/CollectionCreateButtonFragment.graphql";

export default function CollectionCreateButton({ data }: Props) {
  const { t } = useTranslation();

  const parent = useMaybeFragment(fragment, data);

  const hasChildSchemas =
    parent?.schemaRanks &&
    parent.schemaRanks.some((schema) => schema.kind === "COLLECTION");

  return parent?.slug && hasChildSchemas ? (
    <ButtonControlDrawer
      drawer="addCollection"
      drawerQuery={{ drawerSlug: parent.slug }}
      icon="plus"
      actions="collections.create"
    >
      {t("actions.add.collection")}
    </ButtonControlDrawer>
  ) : null;
}

interface Props {
  data?: CollectionCreateButtonFragment$key | null;
}

const fragment = graphql`
  fragment CollectionCreateButtonFragment on Entity {
    ... on Sluggable {
      slug
    }
    schemaRanks {
      kind
    }
  }
`;
