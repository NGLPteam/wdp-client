import React from "react";
import Link from "next/link";
import Breadcrumbs from "components/atomic/Breadcrumbs";

export default function CommunityList() {
  return (
    <div>
      <Breadcrumbs />
      <h1>Communities</h1>
      <ul>
        <li>
          <Link href={`/communities/1`}>
            <a>Community number 1</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
