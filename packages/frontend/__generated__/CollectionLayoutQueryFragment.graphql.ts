/**
 * @generated SignedSource<<a531402b74a6b6f81a719e66ce97a467>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionLayoutQueryFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CollectionLayoutFragment">;
  readonly " $fragmentType": "CollectionLayoutQueryFragment";
};
export type CollectionLayoutQueryFragment$key = {
  readonly " $data"?: CollectionLayoutQueryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionLayoutQueryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "slug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionLayoutQueryFragment",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "slug"
        }
      ],
      "kind": "FragmentSpread",
      "name": "CollectionLayoutFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "201b697f8e0d653addaa60828e928832";

export default node;
