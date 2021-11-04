/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FullTextKind = "HTML" | "MARKDOWN" | "TEXT" | "%future added value";
export type FullTextPropertyFragment = {
    readonly fullText: {
        readonly content: string | null;
        readonly kind: FullTextKind | null;
        readonly lang: string | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "FullTextPropertyFragment";
};
export type FullTextPropertyFragment$data = FullTextPropertyFragment;
export type FullTextPropertyFragment$key = {
    readonly " $data"?: FullTextPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FullTextPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FullTextPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FullText",
      "kind": "LinkedField",
      "name": "fullText",
      "plural": false,
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
          "name": "kind",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lang",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "FullTextProperty",
  "abstractKey": null
};
(node as any).hash = '6a4a8e3c18e685a1f46ce070c4d30d09';
export default node;
