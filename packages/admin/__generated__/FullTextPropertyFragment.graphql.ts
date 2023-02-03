/**
 * @generated SignedSource<<f28f35c4ed0acd1d059b6f150c6f308c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type FullTextKind = "HTML" | "MARKDOWN" | "TEXT" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FullTextPropertyFragment$data = {
  readonly fullText: {
    readonly content: string | null;
    readonly kind: FullTextKind | null;
    readonly lang: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "FullTextPropertyFragment";
};
export type FullTextPropertyFragment$key = {
  readonly " $data"?: FullTextPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FullTextPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FullTextPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    },
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
    }
  ],
  "type": "FullTextProperty",
  "abstractKey": null
};

(node as any).hash = "6a4a8e3c18e685a1f46ce070c4d30d09";

export default node;
