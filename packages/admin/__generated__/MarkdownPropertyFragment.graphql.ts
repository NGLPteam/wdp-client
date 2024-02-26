/**
 * @generated SignedSource<<b2574dc8610f70815f647161bffb3078>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MarkdownPropertyFragment$data = {
  readonly content: string | null | undefined;
  readonly default: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "MarkdownPropertyFragment";
};
export type MarkdownPropertyFragment$key = {
  readonly " $data"?: MarkdownPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MarkdownPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MarkdownPropertyFragment",
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
  "type": "MarkdownProperty",
  "abstractKey": null
};

(node as any).hash = "c8e040e5ce88994d58ddad36cc9cb526";

export default node;
