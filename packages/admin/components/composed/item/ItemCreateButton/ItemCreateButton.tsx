import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ButtonControlDrawer } from "components/atomic";
import { ItemCreateButtonFragment$key } from "@/relay/ItemCreateButtonFragment.graphql";

export default function ItemCreateButton({ data }: Props) {
  const { t } = useTranslation();

  const parent = useMaybeFragment(fragment, data);

  const hasChildSchemas =
    parent?.schemaRanks &&
    parent.schemaRanks.some((schema) => schema.kind === "ITEM");

  return parent?.slug && hasChildSchemas ? (
    <ButtonControlDrawer
      drawer="addItem"
      drawerQuery={{
        drawerSlug: parent.slug,
      }}
      icon="plus"
      actions="items.create"
    >
      {t("actions.add.item")}
    </ButtonControlDrawer>
  ) : null;
}

interface Props {
  data?: ItemCreateButtonFragment$key | null;
}

const fragment = graphql`
  fragment ItemCreateButtonFragment on Entity {
    ... on Sluggable {
      slug
    }
    schemaRanks {
      kind
    }
  }
`;
