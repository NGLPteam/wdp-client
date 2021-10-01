import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";

import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import RoleGrantAccessForm from "components/composed/role/RoleGrantAccessForm";
import { ItemAddAccessDrawerQuery as Query } from "@/relay/ItemAddAccessDrawerQuery.graphql";

export default function ItemAddAccessDrawer({ dialog, params }: Props) {
  const { t } = useTranslation();

  const { drawerSlug } = params;

  return drawerSlug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug: drawerSlug }}>
      {({ data }) => (
        <Drawer
          label={t("actions.add.access")}
          header={
            data?.item?.title
              ? t("drawers.addAccessTo.title", {
                  name: data?.item?.title,
                })
              : t("drawers.addAccess.title")
          }
          dialog={dialog}
          hideOnClickOutside={false}
        >
          <RoleGrantAccessForm
            onSuccess={dialog.hide}
            onCancel={dialog.hide}
            entityId={data?.item?.id}
            data={data}
          />
        </Drawer>
      )}
    </QueryWrapper>
  ) : null;
}

interface Props {
  dialog: DialogProps;
  params: Record<string, string | undefined | null>;
}

const query = graphql`
  query ItemAddAccessDrawerQuery($slug: Slug!) {
    item(slug: $slug) {
      id
      title
    }
    ...RoleGrantAccessFormFragment
  }
`;
