import React from "react";
import SubcollectionList from "components/views/entities/SubcollectionList";
import Link from "next/link";

export default function CommunityDetail({ id, view }: Props) {
    return (
        <div>
            <h1>
                Community: {id} -- view: {view}
            </h1>
            {view === "main" && (
                <ul>
                    <li>
                        <Link href={`/communities/${id}/manage`}>
                            <a>Manage</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/communities/${id}/collections`}>
                            <a>Collections</a>
                        </Link>
                    </li>
                </ul>
            )}
            {view === "collections" && <SubcollectionList id={id} />}
        </div>
    );
}

interface Props {
    id: string;
    view: string;
}
