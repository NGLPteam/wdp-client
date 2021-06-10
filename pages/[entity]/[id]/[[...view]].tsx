import React from "react";
import useGetQueryParam from "hooks/useGetQueryParam";
import CollectionDetailView from "components/views/collections/CollectionDetail";
import CommunityDetailView from "components/views/communities/CommunityDetail";
import ItemDetailView from "components/views/items/ItemDetail";
import UserDetailView from "components/views/users/UserDetail";
import PageNotFoundView from "components/views/PageNotFound";

export default function EntityDetailPage({ ...pageProps }) {
    const entity = useGetQueryParam("entity");
    const id = useGetQueryParam("id");
    const view = useGetQueryParam("view") || "main";

    const viewMap = {
        collections: CollectionDetailView,
        communities: CommunityDetailView,
        items: ItemDetailView,
        users: UserDetailView,
    };

    const Template = viewMap[entity] || PageNotFoundView;

    return <Template entity={entity} id={id} view={view} {...pageProps} />;
}
