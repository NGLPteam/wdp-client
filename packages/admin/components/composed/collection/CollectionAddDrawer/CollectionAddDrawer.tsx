import * as React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "reakit/Dialog";
import Drawer from "components/layout/Drawer";
import CollectionAddForm from "components/composed/collection/CollectionAddForm";
import QueryWrapper from "@wdp/api/components/QueryWrapper";

import type { CollectionAddDrawerQuery as Query } from "@/relay/CollectionAddDrawerQuery.graphql";
import { CollectionAddDrawerRootQuery as RootQuery } from "@/relay/CollectionAddDrawerRootQuery.graphql";

export default function CollectionAddDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { drawerSlug } = params;
  const { t } = useTranslation();

  return drawerSlug ? (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ parentSlug: drawerSlug, schemaKind: "COLLECTION" }}
    >
      {({ data }) => (
        <Drawer
          dialog={dialog}
          hideOnClickOutside={false}
          label={t("actions.add.collection")}
          header={t("actions.add.collection_header")}
        >
          {data && (
            <CollectionAddForm
              data={data}
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
              parentId={data?.collection?.id ?? data?.community?.id}
            />
          )}
        </Drawer>
      )}
    </QueryWrapper>
  ) : (
    <QueryWrapper<RootQuery>
      query={rootQuery}
      initialVariables={{ schemaKind: "COLLECTION" }}
    >
      {({ data }) => (
        <Drawer
          dialog={dialog}
          hideOnClickOutside={false}
          label={t("actions.add.collection")}
          header={t("actions.add.collection_header")}
        >
          {data && (
            <CollectionAddForm
              data={data}
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
            />
          )}
        </Drawer>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query CollectionAddDrawerQuery($parentSlug: Slug!, $schemaKind: SchemaKind!) {
    collection(slug: $parentSlug) {
      id
    }
    community(slug: $parentSlug) {
      id
    }
    ...CollectionAddFormFragment
  }
`;

const rootQuery = graphql`
  query CollectionAddDrawerRootQuery($schemaKind: SchemaKind!) {
    ...CollectionAddFormFragment
  }
`;
