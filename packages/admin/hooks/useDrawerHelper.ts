import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import omitBy from "lodash/omitBy";
import pickBy from "lodash/pickBy";

import ContributorCreatePersonDrawer from "components/composed/contributor/ContributorCreatePersonDrawer";
import ContributorCreateOrganizationDrawer from "components/composed/contributor/ContributorCreateOrganizationDrawer";
import ItemContributionEditDrawer from "components/composed/contribution/ItemContributionEditDrawer";
import CollectionContributionEditDrawer from "components/composed/contribution/CollectionContributionEditDrawer";
import CommunityCreateDrawer from "components/composed/community/CommunityCreateDrawer";
import CommunityUpdateDrawer from "components/composed/community/CommunityUpdateDrawer";
import CollectionUpdateDrawer from "components/composed/collection/CollectionUpdateDrawer";
import ContributorUpdateDrawer from "components/composed/contributor/ContributorUpdateDrawer";
import ItemUpdateDrawer from "components/composed/item/ItemUpdateDrawer";
import CollectionContributionCreateDrawer from "components/composed/contribution/CollectionContributionCreateDrawer";
import ItemContributionCreateDrawer from "components/composed/contribution/ItemContributionCreateDrawer";
import ContributorContributionCreateDrawer from "components/composed/contribution/ContributorContributionCreateDrawer";
import FileCreateDrawer from "components/composed/file/FileCreateDrawer";
import RoleGrantAccessDrawer from "components/composed/role/RoleGrantAccessDrawer";
import UserGrantCollectionAccessDrawer from "components/composed/user/UserGrantCollectionAccessDrawer";
import UserGrantItemAccessDrawer from "components/composed/user/UserGrantItemAccessDrawer";
import UserGrantCommunityAccessDrawer from "components/composed/user/UserGrantCommunityAccessDrawer";
import RoleEditAccessDrawer from "components/composed/role/RoleEditAccessDrawer";
import EntityLinksAddDrawer from "components/composed/links/EntityLinksAddDrawer";
import UserProfileUpdateDrawer from "components/composed/user/UserProfileUpdateDrawer";
import ItemAddDrawer from "components/composed/item/ItemAddDrawer";
import CollectionAddDrawer from "components/composed/collection/CollectionAddDrawer";
import EntityOrderingAddDrawer from "components/composed/ordering/EntityOrderingAddDrawer";
import EntityPageAddDrawer from "components/composed/pages/EntityPageAddDrawer";

const drawerRegistry = {
  addPerson: ContributorCreatePersonDrawer,
  addOrganization: ContributorCreateOrganizationDrawer,
  addCollectionContribution: CollectionContributionCreateDrawer,
  addItemContribution: ItemContributionCreateDrawer,
  addContributorContribution: ContributorContributionCreateDrawer,
  addFile: FileCreateDrawer,
  editItemContribution: ItemContributionEditDrawer,
  editCollectionContribution: CollectionContributionEditDrawer,
  addCommunity: CommunityCreateDrawer,
  editCommunity: CommunityUpdateDrawer,
  editCollection: CollectionUpdateDrawer,
  editContributor: ContributorUpdateDrawer,
  editItem: ItemUpdateDrawer,
  addRoleAccess: RoleGrantAccessDrawer,
  addUserCollectionAccess: UserGrantCollectionAccessDrawer,
  addUserItemAccess: UserGrantItemAccessDrawer,
  addUserCommunityAccess: UserGrantCommunityAccessDrawer,
  editRoleAccess: RoleEditAccessDrawer,
  addLink: EntityLinksAddDrawer,
  editProfile: UserProfileUpdateDrawer,
  addItem: ItemAddDrawer,
  addCollection: CollectionAddDrawer,
  addOrdering: EntityOrderingAddDrawer,
  addPage: EntityPageAddDrawer,
};

export function useDrawerHelper() {
  const { pathname, query, push } = useRouter();

  const drawers = drawerRegistry;
  const validTypes = Object.keys(drawers);

  const params = useMemo(
    () =>
      pickBy(
        query,
        (value, key) =>
          key && typeof key === "string" && key.startsWith("drawer")
      ),
    [query]
  );

  const href = useCallback(
    (drawer: Drawers, drawerParams?: DrawerParams) => {
      const combinedQuery = { ...query, drawer, ...drawerParams };
      return {
        pathname,
        query: combinedQuery,
      };
    },
    [pathname, query]
  );

  const open = useCallback(
    (drawer: Drawers, drawerParams?: DrawerParams) => {
      const url = href(drawer, drawerParams);
      push(url);
    },
    [push, href]
  );

  const close = useCallback(() => {
    const cleanedQuery = omitBy(query, (value, key) => {
      return key && typeof key === "string" && key.startsWith("drawer");
    });

    push({ query: { ...cleanedQuery } }, undefined, { shallow: true });
  }, [push, query]);

  const hideOnClickOutside = query?.drawerHideOnClickOutside;

  const type =
    query?.drawer && typeof query.drawer === "string" ? query.drawer : null;

  return {
    open,
    close,
    drawers,
    href,
    type,
    params,
    hideOnClickOutside,
    validTypes,
  };
}

export type DrawerParams = Record<string, string | undefined>;
export type Drawers = keyof typeof drawerRegistry;

export default useDrawerHelper;
