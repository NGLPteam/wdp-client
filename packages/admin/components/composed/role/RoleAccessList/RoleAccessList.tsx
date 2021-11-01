import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import { useMaybeFragment, useRouteSlug } from "hooks";
import { RoleAccessListFragment$key } from "@/relay/RoleAccessListFragment.graphql";

import PageHeader from "components/layout/PageHeader";
import { useTranslation } from "react-i18next";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";
import { ButtonControl } from "components/atomic/buttons/ButtonControl/ButtonControl.styles";
import { useRouter } from "next/router";
import Link from "next/link";
import RoleAccessGrantsList from "../RoleAccessGrantsList";
import RoleAssignedUsersList from "../RoleAssignedUsersList";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

// Lists user access on any type of entity
// entityType must be collection, item, or community for proper labelling
function RoleAccessList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
  header = "nav.access",
  entityType,
}: RoleAccessListProps) {
  const entity = useMaybeFragment<RoleAccessListFragment$key>(fragment, data);

  const slug = useRouteSlug();
  const { t } = useTranslation();
  const router = useRouter();

  const buttons =
    slug && entityType ? (
      <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
        <ButtonControlDrawer
          drawer={"addRoleAccess"}
          drawerQuery={{
            drawerSlug: slug,
            drawerEntity: entityType,
          }}
          icon="plus"
          actions={
            entityType === "community"
              ? "communities.manage_access"
              : entityType === "collection"
              ? "collections.manage_access"
              : "items.manage_access"
          }
          allowedActions={
            entityType !== "community" ? entity?.allowedActions : undefined
          }
        >
          {t(
            entityType === "community"
              ? "actions.add.member"
              : "actions.add.access"
          )}
        </ButtonControlDrawer>
        <Link
          href={{
            pathname: router.pathname,
            query: router.query.inherited
              ? { slug }
              : { slug, inherited: true },
          }}
          passHref
        >
          <ButtonControl as="a">
            {t(
              `actions.${
                router.query.inherited ? "hide" : "show"
              }.inherited_roles`
            )}
          </ButtonControl>
        </Link>
      </ButtonControlGroup>
    ) : null;

  return (
    <>
      <PageHeader
        title={t(header)}
        buttons={buttons}
        headerStyle={headerStyle}
        hideHeader={hideHeader}
      />
      {router.query.inherited ? (
        <RoleAssignedUsersList<T> data={entity} hideHeader={true} />
      ) : (
        <RoleAccessGrantsList<T>
          data={entity}
          entityType={entityType}
          hideHeader={true}
        />
      )}
    </>
  );
}

interface RoleAccessListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: RoleAccessListFragment$key | null;
  header?: string;
  // Used to set specific labels on the drawer and form
  entityType?: "community" | "collection" | "item";
}

const fragment = graphql`
  fragment RoleAccessListFragment on Entity {
    allowedActions
    ...RoleAccessGrantsListFragment
    ...RoleAssignedUsersListFragment
  }
`;

export default RoleAccessList;
