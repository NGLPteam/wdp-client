import React from "react";
import Link from "next/link";
import { PageHeader } from "components/layout";

export default function ContributorList() {
  return (
    <section>
      <PageHeader title="Contributors" />
      <ul>
        <li>
          <Link href={`/contributors/1`}>
            <a>Contributor number 1</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
