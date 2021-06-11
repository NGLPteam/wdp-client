import React from "react";
import Link from "next/link";
import { useGlobalData } from "hooks/useGlobalData";

export default function SubcollectionList() {
    const {
        state: { activeId: id },
    } = useGlobalData();

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
