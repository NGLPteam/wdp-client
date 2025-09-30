import * as React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import EntityPermalinksUpdateForm from "components/composed/permalinks/EntityPermalinksUpdateForm";
import Drawer from "components/layout/Drawer";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import type { DialogProps } from "reakit/Dialog";

import type { EntityPermalinksUpdateDrawerQuery as Query } from "__generated__/EntityPermalinksUpdateDrawerQuery.graphql";

export default function EntityPermalinksUpdateDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();

  const { drawerPermalinkSlug } = params;

  return (
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{ permalinkSlug: drawerPermalinkSlug }}
      fetchPolicy="store-and-network"
    >
      {({ data }) => {
        const permalink = data?.permalink;
        return (
          <Drawer
            header={t("actions.edit.permalink")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            {permalink && (
              <EntityPermalinksUpdateForm
                data={permalink}
                onSuccess={dialog.hide}
                onCancel={dialog.hide}
              />
            )}
          </Drawer>
        );
      }}
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query EntityPermalinksUpdateDrawerQuery($permalinkSlug: Slug!) {
    permalink(slug: $permalinkSlug) {
      ...EntityPermalinksUpdateFormFragment
    }
  }
`;
