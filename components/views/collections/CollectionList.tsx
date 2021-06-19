import React from "react";
import MixedLink from "components/atomic/MixedLink";
import { PageHeader } from "components/layout";

export default function CollectionList() {
  return (
    <section>
      <PageHeader title="Collections" />
      <ul>
        <li>
          <MixedLink route="collectionDetail" params={{ id: 1 }}>
            <a>Collection number 1</a>
          </MixedLink>
        </li>
      </ul>
    </section>
  );
}
