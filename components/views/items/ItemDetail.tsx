import React from "react";
import Link from "next/link";
import { useGlobalData } from "hooks/useGlobalData";

export default function ItemDetail() {
  const {
    state: { activeId: id, activeView: view },
  } = useGlobalData();

  return (
    <div>
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
