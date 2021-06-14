import React from "react";
import SubcollectionList from "components/views/entities/SubcollectionList";
import SubitemList from "components/views/entities/SubitemList";
import Link from "next/link";
import { useGlobalData } from "hooks/useGlobalData";

export default function CollectionDetail() {
    const { activeId: id, activeView: view } = useGlobalData();

    return (
        <div>
            <h1>
                Collection: {id} -- view: {view}
            </h1>
            {view === "main" && (
                <ul>
                    <li>
                        <Link href={`/collections/${id}/manage`}>
                            <a>Manage</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/collections/${id}/collections`}>
                            <a>Collections</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/collections/${id}/items`}>
                            <a>Items</a>
                        </Link>
                    </li>
                </ul>
            )}
            {view === "collections" && <SubcollectionList />}
            {view === "items" && <SubitemList />}
        </div>
    );
}
