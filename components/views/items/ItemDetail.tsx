import React from "react";
import Link from "next/link";
import { useGlobalData } from "hooks/useGlobalData";
import Breadcrumbs from "components/atomic/Breadcrumbs";

export default function ItemDetail() {
  const { activeId: id, activeView: view } = useGlobalData();

  return (
    <div>
      <Breadcrumbs />
      <h1>
        Item: {id} -- view: {view}
      </h1>
      {view === "main" && (
        <ul>
          <li>
            <Link href={`/items/${id}/manage`}>
              <a>Manage</a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
