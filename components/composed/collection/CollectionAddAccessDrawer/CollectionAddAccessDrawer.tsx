import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";

import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import RoleGrantAccessForm from "components/composed/role/RoleGrantAccessForm";
import { CollectionAddAccessDrawerQuery as Query } from "@/relay/CollectionAddAccessDrawerQuery.graphql";

export default function CollectionAddAccessDrawer({ dialog, params }: Props) {
  const { t } = useTranslation();

  const { drawerSlug } = params;

  return drawerSlug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug: drawerSlug }}>
      {({ data }) => (
        <Drawer
          label={t("actions.add.access")}
          header={
            data?.collection?.title
              ? t("drawers.addAccessTo.title", {
                  name: data?.collection?.title,
                })
              : t("drawers.addAccess.title")
          }
          dialog={dialog}
          hideOnClickOutside={false}
        >
          <RoleGrantAccessForm
            onSuccess={dialog.hide}
            onCancel={dialog.hide}
            entityId={data?.collection?.id}
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
  query CollectionAddAccessDrawerQuery($slug: Slug!) {
    collection(slug: $slug) {
      id
      title
    }
    ...RoleGrantAccessFormFragment
  }
`;
