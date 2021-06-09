import React from "react";
import Link from "next/link";
import useGetQueryParam from "hooks/useGetQueryParam";

export default function EntityListPage() {
    const entity = useGetQueryParam("entity");

    // TODO: here we'll use a map to return the right template per entity

    return (
        <div>
            <h1>{entity} list</h1>
            <ul>
                <li>
                    <Link href={`/${entity}/1`}>
                        <a>{entity} number 1</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
