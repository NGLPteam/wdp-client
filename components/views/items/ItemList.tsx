import React from "react";
import Link from "next/link";
import { PageHeader } from "components/layout";

export default function ItemList() {
  return (
    <section>
      <PageHeader title="Items" />
      <ul>
        <li>
          <Link href={`/items/1`}>
            <a>Item number 1</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
