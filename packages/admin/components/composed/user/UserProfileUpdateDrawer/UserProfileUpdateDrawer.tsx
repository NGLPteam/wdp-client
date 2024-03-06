import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useDrawerHelper, useIsAuthenticated } from "hooks";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import Drawer from "components/layout/Drawer";
import { UserProfileUpdateDrawerQuery as Query } from "@/relay/UserProfileUpdateDrawerQuery.graphql";
import UserProfileUpdateForm from "../UserProfileUpdateForm";
import type { DialogProps } from "reakit/Dialog";

export default function UserProfileUpdateDrawer({ dialog }: Props) {
  const drawerHelper = useDrawerHelper();
  const { t } = useTranslation();
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    drawerHelper.close();
    return null;
  }

  return (
    <LazyLoadQueryWrapper<Query> query={query} variables={{}}>
      {({ data }) => (
        <Drawer
          header={t("actions.edit.profile_header")}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          {data && data.viewer && (
            <UserProfileUpdateForm
              onSuccess={dialog.hide}
              onCancel={dialog.hide}
              data={data.viewer}
            />
          )}
        </Drawer>
      )}
    </LazyLoadQueryWrapper>
  );
}

interface Props {
  dialog: DialogProps;
  params: Record<string, string | undefined | null>;
}

// This fun little query gets the right id and title depending on the entity type.
const query = graphql`
  query UserProfileUpdateDrawerQuery {
    viewer {
      name
      ...UserProfileUpdateFormFragment
    }
  }
`;
