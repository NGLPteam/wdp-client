import React, { useState } from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import { useMaybeFragment, useRouteSlug } from "hooks";
import { RoleAccessListFragment$key } from "@/relay/RoleAccessListFragment.graphql";

import PageHeader from "components/layout/PageHeader";
import { useTranslation } from "react-i18next";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";
import { ButtonControl } from "components/atomic/buttons/ButtonControl/ButtonControl.styles";
import RoleAccessGrantsList from "../RoleAccessGrantsList";
import RoleAssignedUsersList from "../RoleAssignedUsersList";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

// Lists user access on any type of entity
// entityType must be collection, item, or community for proper labelling
function RoleAccessList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
  header = "navLabels.access",
  entityType,
}: RoleAccessListProps) {
  const entity = useMaybeFragment<RoleAccessListFragment$key>(fragment, data);

  const slug = useRouteSlug();
  const { t } = useTranslation();
  const [showInherited, setShowInherited] = useState(false);

  const handleShowToggle = () => {
    setShowInherited(!showInherited);
  };

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
        <ButtonControl onClick={handleShowToggle}>
          {showInherited ? "Hide Inherited Roles" : "Show Inherited Roles"}
        </ButtonControl>
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
      {showInherited ? (
        <RoleAssignedUsersList data={entity} hideHeader={true} />
      ) : (
        <RoleAccessGrantsList
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
