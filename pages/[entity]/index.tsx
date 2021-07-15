import React from "react";
import { useSetActiveEntity } from "hooks/useRouterContext";
import CollectionListView from "components/views/collections/CollectionList";
import CommunityListView from "components/views/communities/CommunityList";
import ContributorListView from "components/views/contributors/ContributorList";
import ItemListView from "components/views/items/ItemList";
import UserListView from "components/views/users/UserList";
import PageNotFoundView from "components/views/PageNotFound";
import { MapOver } from "helpers/sharedTypes";

export default function EntityListPage({ ...pageProps }) {
  const entity = useSetActiveEntity();

  const viewMap: MapOver = {
    collections: CollectionListView,
    communities: CommunityListView,
    contributors: ContributorListView,
    items: ItemListView,
    users: UserListView,
  };

  const Template = viewMap[entity] || PageNotFoundView;

  return <Template {...pageProps} />;
}
