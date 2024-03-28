/**
 * @generated SignedSource<<ffe5a8d2a5ac9c5bbb8f9bb2e767a9c1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppBodyFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AppFooterFragment" | "AppHeaderFragment">;
  readonly " $fragmentType": "AppBodyFragment";
};
export type AppBodyFragment$key = {
  readonly " $data"?: AppBodyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppBodyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBodyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppHeaderFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppFooterFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "0b80e432410931ef158f4127a60aa12e";

export default node;
