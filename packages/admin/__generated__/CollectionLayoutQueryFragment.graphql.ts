/**
 * @generated SignedSource<<a7172ebafe922ed89a38454fcc8631f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionLayoutQueryFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AuthContextFragment" | "CollectionLayoutFragment">;
  readonly " $fragmentType": "CollectionLayoutQueryFragment";
};
export type CollectionLayoutQueryFragment$key = {
  readonly " $data"?: CollectionLayoutQueryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionLayoutQueryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionLayoutQueryFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollectionLayoutFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AuthContextFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};

(node as any).hash = "614c237c4893094ac2513ab91a64c73a";

export default node;
