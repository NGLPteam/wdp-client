/**
 * @generated SignedSource<<361552c548efdcbc209a90cb210bede2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FloatPropertyFragment$data = {
  readonly defaultFloat: number | null | undefined;
  readonly floatValue: number | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "FloatPropertyFragment";
};
export type FloatPropertyFragment$key = {
  readonly " $data"?: FloatPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FloatPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FloatPropertyFragment",
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
      "name": "floatValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultFloat",
      "storageKey": null
    }
  ],
  "type": "FloatProperty",
  "abstractKey": null
};

(node as any).hash = "67e4459ee339294263f524d2e5f2d25d";

export default node;
