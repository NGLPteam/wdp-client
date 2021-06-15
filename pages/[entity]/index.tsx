import React from "react";
import { useSetLocale } from "hooks/useSetLocale";
import { useSetActiveEntity } from "hooks/useGlobalData";
import CollectionListView from "components/views/collections/CollectionList";
import CommunityListView from "components/views/communities/CommunityList";
import ItemListView from "components/views/items/ItemList";
import UserListView from "components/views/users/UserList";
import PageNotFoundView from "components/views/PageNotFound";

export default function EntityListPage({ ...pageProps }) {
  useSetLocale("en");
  const entity = useSetActiveEntity();

  const viewMap: MapOver = {
    collections: CollectionListView,
    communities: CommunityListView,
    items: ItemListView,
    users: UserListView,
  };

  const Template = viewMap[entity] || PageNotFoundView;

  return <Template {...pageProps} />;
}
