import { graphql } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { QueryWrapper } from "components/api";
import Drawer from "components/layout/Drawer";
import { UserGrantItemAccessDrawerQuery as Query } from "@/relay/UserGrantItemAccessDrawerQuery.graphql";
import UserGrantItemAccessForm from "../UserGrantItemAccessForm";
import type { DialogProps } from "reakit/Dialog";

// Drawer params required: drawerSlug and drawerEntity
// drawerEntity should be one of three entities: "item" | "collection" | "community"
export default function UserGrantItemAccessDrawer({ dialog, params }: Props) {
  const { t } = useTranslation();

  const { drawerSlug } = params;

  return drawerSlug ? (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{
        slug: drawerSlug,
      }}
    >
      {({ data }) => (
        <Drawer
          header={t("actions.add.access")}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          <UserGrantItemAccessForm
            onSuccess={dialog.hide}
            onCancel={dialog.hide}
            userId={data?.user?.id}
          />
        </Drawer>
      )}
    </QueryWrapper>
  ) : null;
}

interface Props {
  dialog: DialogProps;
  params: Record<string, string | undefined | null>;
}

// This fun little query gets the right id and title depending on the entity type.
const query = graphql`
  query UserGrantItemAccessDrawerQuery($slug: Slug!) {
    user(slug: $slug) {
      id
      name
    }
  }
`;
