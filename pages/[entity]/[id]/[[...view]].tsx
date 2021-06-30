import React from "react";
import {
  useSetActiveEntity,
  useSetActiveId,
  useSetActiveView,
  useSetActiveSubview,
} from "hooks/useGlobalData";
import CollectionDetailView from "components/views/collections/CollectionDetail";
import CommunityDetailView from "components/views/communities/CommunityDetail";
import ContributorDetailView from "components/views/contributors/ContributorDetail";
import ItemDetailView from "components/views/items/ItemDetail";
import UserDetailView from "components/views/users/UserDetail";
import PageNotFoundView from "components/views/PageNotFound";
import { MapOver } from "helpers/sharedTypes";

export default function EntityDetailPage({ ...pageProps }) {
  const entity = useSetActiveEntity();
  useSetActiveId();
  useSetActiveView();
  useSetActiveSubview();

  const viewMap: MapOver = {
    collections: CollectionDetailView,
    communities: CommunityDetailView,
    contributors: ContributorDetailView,
    items: ItemDetailView,
    users: UserDetailView,
  };

  const Template = viewMap[entity] || PageNotFoundView;

  return <Template {...pageProps} />;
}
