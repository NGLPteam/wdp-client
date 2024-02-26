import * as React from "react";
import { graphql } from "relay-runtime";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import QueryWrapper from "@wdp/lib/api/components/QueryWrapper";
import Drawer from "components/layout/Drawer";
import ItemAddForm from "components/composed/item/ItemAddForm";
import type { ItemAddDrawerQuery as Query } from "@/relay/ItemAddDrawerQuery.graphql";

export default function ItemAddDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const { drawerSlug } = params;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ entitySlug: drawerSlug, schemaKind: "ITEM" }}
    >
      {({ data }) => (
        <Drawer
          header={t("actions.add.item_header")}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          {data && (
            <ItemAddForm
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
              data={data}
            />
          )}
        </Drawer>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query ItemAddDrawerQuery($entitySlug: Slug!, $schemaKind: SchemaKind!) {
    ...ItemAddFormFragment
  }
`;
