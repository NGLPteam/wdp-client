import React from "react";
import SubcollectionList from "components/views/entities/SubcollectionList";
import Link from "next/link";
import { useGlobalData } from "hooks/useGlobalData";

export default function CommunityDetail() {
  const { activeId: id, activeView: view } = useGlobalData();

  return (
    <div>
      <h1>
        Community: {id} -- view: {view}
      </h1>
      {view === "main" && (
        <ul>
          <li>
            <Link href={`/communities/${id}/manage`}>
              <a>Manage</a>
            </Link>
          </li>
          <li>
            <Link href={`/communities/${id}/collections`}>
              <a>Collections</a>
            </Link>
          </li>
        </ul>
      )}
      {view === "collections" && <SubcollectionList />}
    </div>
  );
}
