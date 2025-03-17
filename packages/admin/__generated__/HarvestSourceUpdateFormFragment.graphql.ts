/**
 * @generated SignedSource<<0317822fff9f20faf1c0bca90f11fd4e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestSourceUpdateFormFragment$data = {
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestSourceUpdateFormFieldsFragment">;
  readonly " $fragmentType": "HarvestSourceUpdateFormFragment";
};
export type HarvestSourceUpdateFormFragment$key = {
  readonly " $data"?: HarvestSourceUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestSourceUpdateFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestSourceUpdateFormFragment",
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
      "name": "HarvestSourceUpdateFormFieldsFragment"
    }
  ],
  "type": "HarvestSource",
  "abstractKey": null
};

(node as any).hash = "d0aae3ac2744d4fec0edec05ddda332d";

export default node;
