/**
 * @generated SignedSource<<0b474a5a8c726639b7fcfcf091d1ce01>>
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
  readonly description: string | null | undefined;
  readonly fullText: {
    readonly content: string | null | undefined;
    readonly kind: FullTextKind | null | undefined;
    readonly lang: string | null | undefined;
  } | null | undefined;
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
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
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

(node as any).hash = "a4620cb11debe629e853be5f2faecba5";

export default node;
