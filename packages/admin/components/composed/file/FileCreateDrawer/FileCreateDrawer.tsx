import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useDrawerHelper } from "hooks";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import Drawer from "components/layout/Drawer";
import FileCreateForm from "../FileCreateForm";
import type { FileCreateDrawerQuery as Query } from "__generated__/FileCreateDrawerQuery.graphql";
import type { DialogProps } from "reakit/Dialog";

export default function FileCreateDrawer({
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
        data?.item?.id || data?.collection?.id ? (
          <Drawer
            header={t("actions.add.file_header")}
            dialog={dialog}
            hideOnClickOutside={false}
          >
            <FileCreateForm
              entityId={data.item?.id || data.collection?.id || ""}
              onSuccess={dialog.hide}
            />
          </Drawer>
        ) : null
      }
    </LazyLoadQueryWrapper>
  );
}

const query = graphql`
  query FileCreateDrawerQuery($slug: Slug!) {
    item(slug: $slug) {
      id
    }
    collection(slug: $slug) {
      id
    }
  }
`;
