import React from "react";
import Link from "next/link";
import { PageHeader } from "components/layout";

export default function CommunityList() {
  return (
    <section>
      <PageHeader title="Communities" />
      <ul>
        <li>
          <Link href={`/communities/1`}>
            <a>Community number 1</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
