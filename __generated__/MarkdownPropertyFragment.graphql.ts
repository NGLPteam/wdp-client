/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MarkdownPropertyFragment = {
    readonly content: string | null;
    readonly default: string | null;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "MarkdownPropertyFragment";
};
export type MarkdownPropertyFragment$data = MarkdownPropertyFragment;
export type MarkdownPropertyFragment$key = {
    readonly " $data"?: MarkdownPropertyFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"MarkdownPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MarkdownPropertyFragment",
  "selections": [
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "MarkdownProperty",
  "abstractKey": null
};
(node as any).hash = 'c8e040e5ce88994d58ddad36cc9cb526';
export default node;
