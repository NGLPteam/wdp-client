import React from "react";
import Link from "next/link";
import { useGlobalData } from "hooks/useGlobalData";
import Breadcrumbs from "components/atomic/Breadcrumbs";

export default function SubitemList() {
  const { activeId: id } = useGlobalData();
  return (
    <div>
      <Breadcrumbs />
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
