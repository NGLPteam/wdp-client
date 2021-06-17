import React from "react";
import Link from "next/link";
import { useGlobalData } from "hooks/useGlobalData";
import Breadcrumbs from "components/atomic/Breadcrumbs";

export default function SubcollectionList() {
  const { activeId: id } = useGlobalData();
  return (
    <div>
      <Breadcrumbs />
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
