import React from "react";
import Link from "next/link";

export default function SubitemList() {
  return (
    <div>
      <h2>Child Items</h2>
      <ul>
        <li>
          <Link href={`/items/1`}>
            <a>Item Placeholder</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
