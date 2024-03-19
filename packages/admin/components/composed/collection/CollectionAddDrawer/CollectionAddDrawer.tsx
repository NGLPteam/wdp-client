import * as React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import Drawer from "components/layout/Drawer";
import CollectionAddForm from "components/composed/collection/CollectionAddForm";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";

import type { CollectionAddDrawerQuery as Query } from "@/relay/CollectionAddDrawerQuery.graphql";
import { CollectionAddDrawerRootQuery as RootQuery } from "@/relay/CollectionAddDrawerRootQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

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
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{ parentSlug: drawerSlug, schemaKind: "COLLECTION" }}
    >
      {({ data }) => (
        <Drawer
          dialog={dialog}
          hideOnClickOutside={false}
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
    </LazyLoadQueryWrapper>
  ) : (
    <LazyLoadQueryWrapper<RootQuery>
      query={rootQuery}
      variables={{ schemaKind: "COLLECTION" }}
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
    </LazyLoadQueryWrapper>
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
