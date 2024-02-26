/**
 * @generated SignedSource<<1d1ba25c1175b890735623ddb610234f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DatePropertyFragment$data = {
  readonly date: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "DatePropertyFragment";
};
export type DatePropertyFragment$key = {
  readonly " $data"?: DatePropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DatePropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DatePropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    }
  ],
  "type": "DateProperty",
  "abstractKey": null
};

(node as any).hash = "6fe4e0dfdb11093a0e5e9737344be60b";

export default node;
