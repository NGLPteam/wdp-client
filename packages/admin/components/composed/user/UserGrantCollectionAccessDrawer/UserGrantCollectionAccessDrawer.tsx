import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import Drawer from "components/layout/Drawer";
import { UserGrantCollectionAccessDrawerQuery as Query } from "@/relay/UserGrantCollectionAccessDrawerQuery.graphql";
import UserGrantCollectionAccessForm from "../UserGrantCollectionAccessForm";
import type { DialogProps } from "reakit/Dialog";

// Drawer params required: drawerSlug and drawerEntity
// drawerEntity should be one of three entities: "item" | "collection" | "community"
export default function UserGrantCollectionAccessDrawer({
  dialog,
  params,
}: Props) {
  const { t } = useTranslation();

  const { drawerSlug } = params;

  return drawerSlug ? (
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{
        slug: drawerSlug,
      }}
    >
      {({ data }) => (
        <Drawer
          header={t("actions.add.access")}
          dialog={dialog}
          hideOnClickOutside={false}
        >
          <UserGrantCollectionAccessForm
            onSuccess={dialog.hide}
            onCancel={dialog.hide}
            userId={data?.user?.id}
          />
        </Drawer>
      )}
    </LazyLoadQueryWrapper>
  ) : null;
}

interface Props {
  dialog: DialogProps;
  params: Record<string, string | undefined | null>;
}

// This fun little query gets the right id and title depending on the entity type.
const query = graphql`
  query UserGrantCollectionAccessDrawerQuery($slug: Slug!) {
    user(slug: $slug) {
      id
      name
    }
  }
`;
