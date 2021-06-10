import React from "react";
import Link from "next/link";

export default function SubcollectionList({ id }: Props) {
    return (
        <div>
            <h1>Collections for {id}</h1>
            <ul>
                <li>
                    <Link href={`/collections/1`}>
                        <a>Collection number 1</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

interface Props {
    id: string;
}
