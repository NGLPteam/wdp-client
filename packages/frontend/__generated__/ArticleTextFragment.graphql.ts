/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FullTextKind = "HTML" | "MARKDOWN" | "TEXT" | "%future added value";
export type ArticleTextFragment = {
    readonly thumbnail: {
        readonly " $fragmentRefs": FragmentRefs<"ContentImageFragment">;
    } | null;
    readonly properties: ReadonlyArray<{
        readonly fullPath?: string | undefined;
        readonly fullText?: {
            readonly content: string | null;
            readonly kind: FullTextKind | null;
            readonly lang: string | null;
        } | null | undefined;
        readonly type?: string | undefined;
        readonly label?: string | undefined;
    }>;
    readonly " $refType": "ArticleTextFragment";
};
export type ArticleTextFragment$data = ArticleTextFragment;
export type ArticleTextFragment$key = {
    readonly " $data"?: ArticleTextFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleTextFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleTextFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetPreview",
      "kind": "LinkedField",
      "name": "thumbnail",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContentImageFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "properties",
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperties",
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "fullPath",
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "type",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "label",
              "storageKey": null
            }
          ],
          "type": "FullTextProperty",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = '13c690a40a959fb5a3a7190fa318c3f4';
export default node;
