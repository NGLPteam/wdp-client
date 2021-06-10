import React from "react";
import Link from "next/link";

export default function CollectionList() {
    return (
        <div>
            <h1>Collections</h1>
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
