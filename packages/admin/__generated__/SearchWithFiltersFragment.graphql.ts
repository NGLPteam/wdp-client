/**
 * @generated SignedSource<<31129f5315f6721981c83cc0ccf63a6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchWithFiltersFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SearchFilterDrawerFragment">;
  readonly " $fragmentType": "SearchWithFiltersFragment";
};
export type SearchWithFiltersFragment$key = {
  readonly " $data"?: SearchWithFiltersFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchWithFiltersFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchWithFiltersFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchFilterDrawerFragment"
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};

(node as any).hash = "9563a48181dade2f396d5c78fec848ad";

export default node;
