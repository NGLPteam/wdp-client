import React from "react";
import MixedLink from "components/atomic/MixedLink";

export default function CollectionList() {
  return (
    <div>
      <h1>Collections</h1>
      <ul>
        <li>
          <MixedLink route="collectionDetail" params={{ id: 1 }}>
            Collection number 1
          </MixedLink>
        </li>
      </ul>
    </div>
  );
}
