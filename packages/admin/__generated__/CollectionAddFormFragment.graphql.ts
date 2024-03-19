/**
 * @generated SignedSource<<3057ce498a02e0fe20d34d7e2729637e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionAddFormFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CommunitySelectFragment" | "SchemaSelectFragment">;
  readonly " $fragmentType": "CollectionAddFormFragment";
};
export type CollectionAddFormFragment$key = {
  readonly " $data"?: CollectionAddFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionAddFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionAddFormFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaSelectFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunitySelectFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "e7972a082b813ade3092ab5fe481e726";

export default node;
