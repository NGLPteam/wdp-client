import React from "react";
import Link from "next/link";

export default function ItemDetail({ id, view }: Props) {
    return (
        <div>
            <h1>
                Item: {id} -- view: {view}
            </h1>
            {view === "main" && (
                <ul>
                    <li>
                        <Link href={`/items/${id}/manage`}>
                            <a>Manage</a>
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

interface Props {
    id: string;
    view: string;
}
