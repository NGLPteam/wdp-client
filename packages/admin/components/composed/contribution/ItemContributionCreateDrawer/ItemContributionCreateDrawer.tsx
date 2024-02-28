import { useTranslation } from "react-i18next";
import { graphql } from "relay-runtime";
import { useDrawerHelper } from "hooks";
import { Drawer } from "components/layout";
import { QueryWrapper } from "components/api";
import ContributionCreateForm from "../ContributionCreateForm";
import type { ItemContributionCreateDrawerQuery as Query } from "__generated__/ItemContributionCreateDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

export default function ItemContributionCreateDrawer({
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
        data?.item?.id && data?.item?.title ? (
          <Drawer
            header={t("actions.add.contributor")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            <ContributionCreateForm
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
              contributableId={data.item.id}
              contributableName={data.item.title}
              type="item"
            />
          </Drawer>
        ) : null
      }
    </QueryWrapper>
  );
}

const query = graphql`
  query ItemContributionCreateDrawerQuery($slug: Slug!) {
    item(slug: $slug) {
      id
      title
    }
  }
`;
