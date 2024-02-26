import * as React from "react";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { graphql } from "relay-runtime";
import EntityOrderingEditForm from "../EntityOrderingEditForm";
import Drawer from "components/layout/Drawer";
import { QueryWrapper } from "components/api";
import { EntityOrderingEditDrawerQuery as Query } from "@/relay/EntityOrderingEditDrawerQuery.graphql";

export default function EntityOrderingEditDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const { drawerSlug, drawerIdentifier } = params;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ slug: drawerSlug, identifier: drawerIdentifier }}
    >
      {({ data }) => {
        return (
          <Drawer
            header={t("actions.edit.ordering_header")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            {data && data.collection ? (
              <EntityOrderingEditForm
                data={data.collection}
                onSuccess={dialog.hide}
                onCancel={dialog.hide}
              />
            ) : data && data.item ? (
              <EntityOrderingEditForm
                data={data.item}
                onSuccess={dialog.hide}
                onCancel={dialog.hide}
              />
            ) : null}
          </Drawer>
        );
      }}
    </QueryWrapper>
  );
}

const query = graphql`
  query EntityOrderingEditDrawerQuery($slug: Slug!, $identifier: String!) {
    collection(slug: $slug) {
      ...EntityOrderingEditFormFragment
    }
    item(slug: $slug) {
      ...EntityOrderingEditFormFragment
    }
  }
`;
