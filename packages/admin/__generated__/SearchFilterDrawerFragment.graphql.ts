/**
 * @generated SignedSource<<27e475a28ac98c836e6107a7d72f193c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchFilterDrawerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SearchFilterFormFragment">;
  readonly " $fragmentType": "SearchFilterDrawerFragment";
};
export type SearchFilterDrawerFragment$key = {
  readonly " $data"?: SearchFilterDrawerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchFilterDrawerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFilterDrawerFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterFormFragment"
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};

(node as any).hash = "420a03db0d9cfb17060d93955af81c87";

export default node;
