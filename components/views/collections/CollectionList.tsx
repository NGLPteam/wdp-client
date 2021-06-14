import React from "react";
import MixedLink from "components/atomic/MixedLink";

export default function CollectionList() {
  return (
    <div>
      <h1>Collections</h1>
      <ul>
        <li>
          <MixedLink route="collectionDetail" params={{ id: 1 }}>
            <a>Collection number 1</a>
          </MixedLink>
        </li>
      </ul>
    </div>
  );
}
