import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import type { DialogProps } from "reakit/Dialog";
import ContributionCreateForm from "../ContributionCreateForm";
import { useDrawerHelper } from "hooks";
import type { CollectionContributionCreateDrawerQuery as Query } from "__generated__/CollectionContributionCreateDrawerQuery.graphql";
import { Drawer } from "components/layout";
import { QueryWrapper } from "components/api";

export default function CollectionContributionCreateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();

  // Check if we have a contribution or item id
  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug: drawerSlug }}>
      {({ data }) =>
        data?.collection?.id && data?.collection?.title ? (
          <Drawer
            header={t("actions.add.contributor")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            <ContributionCreateForm
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
              contributableId={data.collection.id}
              contributableName={data.collection.title}
              type="collection"
            />
          </Drawer>
        ) : null
      }
    </QueryWrapper>
  );
}

const query = graphql`
  query CollectionContributionCreateDrawerQuery($slug: Slug!) {
    collection(slug: $slug) {
      id
      title
    }
  }
`;
