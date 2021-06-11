import React from "react";
import NamedLink from "components/atomic/NamedLink";

export default function CollectionList() {
  return (
    <div>
      <h1>Collections</h1>
      <ul>
        <li>
          <NamedLink route="collectionDetail" params={{ slug: 1 }}>
            <a>Collection number 1</a>
          </NamedLink>
        </li>
      </ul>
    </div>
  );
}
