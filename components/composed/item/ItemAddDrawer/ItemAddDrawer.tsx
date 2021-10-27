import * as React from "react";
import { graphql } from "react-relay";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import ItemAddForm, {
  MainItemsPageAddForm,
} from "components/composed/item/ItemAddForm";
import QueryWrapper from "components/api/QueryWrapper";

import type {
  ItemAddDrawerQuery as Query,
  ItemAddDrawerQueryResponse,
} from "@/relay/ItemAddDrawerQuery.graphql";
import type { ItemAddDrawerMainPageQuery as MainPageQuery } from "@/relay/ItemAddDrawerMainPageQuery.graphql";

export default function ItemAddDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const { drawerSource, drawerSlug } = params;

  const FormComponent =
    drawerSource === "main" ? MainItemsPageAddForm : ItemAddForm;
  const renderDrawer = ({ data }) => (
    <Drawer
      label={t("actions.add.item")}
      header={t("actions.add.item_header")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      {data && (
        <FormComponent
          onSuccess={dialog.hide}
          onCancel={dialog.hide}
          data={data}
        />
      )}
    </Drawer>
  );

  return drawerSource === "main" ? (
    <QueryWrapper<MainPageQuery> query={mainItemsPageQuery}>
      {renderDrawer}
    </QueryWrapper>
  ) : (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ entitySlug: drawerSlug }}
    >
      {renderDrawer}
    </QueryWrapper>
  );
}

const query = graphql`
  query ItemAddDrawerQuery($entitySlug: Slug!) {
    ...ItemAddFormFragment
  }
`;

const mainItemsPageQuery = graphql`
  query ItemAddDrawerMainPageQuery {
    ...MainItemsPageAddFormFragment
  }
`;
