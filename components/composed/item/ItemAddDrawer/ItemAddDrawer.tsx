import * as React from "react";
import { graphql } from "react-relay";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import ItemAddForm from "components/composed/item/ItemAddForm";
import QueryWrapper from "components/api/QueryWrapper";

import type { ItemAddDrawerQuery as Query } from "@/relay/ItemAddDrawerQuery.graphql";

export default function ItemAddDrawer({ dialog }: { dialog: DialogProps }) {
  const { t } = useTranslation();

  return (
    <QueryWrapper<Query> query={query}>
      {({ data }) => (
        <Drawer
          label={t("actions.add.item")}
          header={t("actions.add.item_header")}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          <ItemAddForm
            onSuccess={dialog.hide}
            onCancel={dialog.hide}
            data={data || undefined}
          />
        </Drawer>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query ItemAddDrawerQuery {
    ...ItemAddFormSchemaOptionsFragment
  }
`;
