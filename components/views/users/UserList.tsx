import React from "react";
import Link from "next/link";

export default function UserList() {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                <li>
                    <Link href={`/users/1`}>
                        <a>User number 1</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
