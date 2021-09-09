import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import ContributorCreatePersonDrawer from "components/composed/contributor/ContributorCreatePersonDrawer";
import ContributorCreateOrganizationDrawer from "components/composed/contributor/ContributorCreateOrganizationDrawer";
import ItemContributionEditDrawer from "components/composed/contribution/ItemContributionEditDrawer";
import CollectionContributionEditDrawer from "components/composed/contribution/CollectionContributionEditDrawer";
import omitBy from "lodash/omitBy";
import pickBy from "lodash/pickBy";

const drawerRegistry = {
  addPerson: ContributorCreatePersonDrawer,
  addOrganization: ContributorCreateOrganizationDrawer,
  editItemContribution: ItemContributionEditDrawer,
  editCollectionContribution: CollectionContributionEditDrawer,
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

type DrawerParams = Record<string, string>;
export type Drawers = keyof typeof drawerRegistry;

export default useDrawerHelper;
