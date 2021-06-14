import React from "react";
import Link from "next/link";

export default function ItemList() {
  return (
    <div>
      <h1>Items</h1>
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
