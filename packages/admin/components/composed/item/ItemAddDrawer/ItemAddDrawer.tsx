import * as React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import Drawer from "components/layout/Drawer";
import ItemAddForm from "components/composed/item/ItemAddForm";
import type { ItemAddDrawerQuery as Query } from "@/relay/ItemAddDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

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
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{ entitySlug: drawerSlug, schemaKind: "ITEM" }}
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
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query ItemAddDrawerQuery($entitySlug: Slug!, $schemaKind: SchemaKind!) {
    ...ItemAddFormFragment
  }
`;
