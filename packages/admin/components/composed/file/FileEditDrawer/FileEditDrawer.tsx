import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useDrawerHelper } from "hooks";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import Drawer from "components/layout/Drawer";
import FileEditForm from "../FileEditForm";
import type { DialogProps } from "reakit/Dialog";
import type { FileEditDrawerQuery as Query } from "__generated__/FileEditDrawerQuery.graphql";

export default function FileEditDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();

  // Check if we have a slug
  if (!Object.prototype.hasOwnProperty.call(params, "drawerSlug")) {
    drawerHelper.close();
    return null;
  }

  const { drawerSlug } = params;

  return (
    <LazyLoadQueryWrapper<Query> query={query} variables={{ slug: drawerSlug }}>
      {({ data }) =>
        data?.asset ? (
          <Drawer
            header={t("actions.edit.file_header", { name: data.asset.name })}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            <FileEditForm data={data.asset} onSuccess={dialog.hide} />
          </Drawer>
        ) : null
      }
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query FileEditDrawerQuery($slug: Slug!) {
    asset(slug: $slug) {
      ... on Asset {
        name
      }
      ...FileEditFormFragment
    }
  }
`;
