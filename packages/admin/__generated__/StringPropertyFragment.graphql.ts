/**
 * @generated SignedSource<<c97690cd879e1a6ec7e03d73e0c9a577>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StringPropertyFragment$data = {
  readonly content: string | null;
  readonly default: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "StringPropertyFragment";
};
export type StringPropertyFragment$key = {
  readonly " $data"?: StringPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StringPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StringPropertyFragment",
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
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "default",
      "storageKey": null
    }
  ],
  "type": "StringProperty",
  "abstractKey": null
};

(node as any).hash = "a7296c7bf5f2b78ffc7c65353af9218c";

export default node;
