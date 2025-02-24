import * as React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import Drawer from "components/layout/Drawer";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import { EntityOrderingEditDrawerQuery as Query } from "@/relay/EntityOrderingEditDrawerQuery.graphql";
import EntityOrderingEditForm from "../EntityOrderingEditForm";
import type { DialogProps } from "reakit/Dialog";

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
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{ slug: drawerSlug, identifier: drawerIdentifier }}
    >
      {({ data }) => {
        const name =
          data.collection?.ordering?.name || data.item?.ordering?.name || "";

        return (
          <Drawer
            header={t("actions.edit.ordering_header", { name })}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            {data && data.collection ? (
              <EntityOrderingEditForm
                data={data}
                onSuccess={dialog.hide}
                onCancel={dialog.hide}
              />
            ) : data && data.item ? (
              <EntityOrderingEditForm
                data={data}
                onSuccess={dialog.hide}
                onCancel={dialog.hide}
              />
            ) : null}
          </Drawer>
        );
      }}
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query EntityOrderingEditDrawerQuery($slug: Slug!, $identifier: String!) {
    ...EntityOrderingEditFormFragment

    collection(slug: $slug) {
      ordering(identifier: $identifier) {
        name
      }
    }
    item(slug: $slug) {
      ordering(identifier: $identifier) {
        name
      }
    }
  }
`;
