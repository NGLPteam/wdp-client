import React from "react";
import Link from "next/link";

export default function SubitemList({ id }: Props) {
    return (
        <div>
            <h1>Items for {id}</h1>
            <ul>
                <li>
                    <Link href={`/items/1`}>
                        <a>Item number 1</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

interface Props {
    id: string;
}
