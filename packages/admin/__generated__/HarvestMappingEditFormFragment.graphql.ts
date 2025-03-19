/**
 * @generated SignedSource<<bdb396c63a2996f24ba56d6e23a1af92>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestMappingEditFormFragment$data = {
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingEditFormFieldsFragment">;
  readonly " $fragmentType": "HarvestMappingEditFormFragment";
};
export type HarvestMappingEditFormFragment$key = {
  readonly " $data"?: HarvestMappingEditFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingEditFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestMappingEditFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "HarvestMappingEditFormFieldsFragment"
    }
  ],
  "type": "HarvestMapping",
  "abstractKey": null
};

(node as any).hash = "630e9d54741e4761add51ed1c2b3e0bd";

export default node;
