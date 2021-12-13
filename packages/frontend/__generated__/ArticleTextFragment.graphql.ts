/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FullTextKind = "HTML" | "MARKDOWN" | "TEXT" | "%future added value";
export type ArticleTextFragment = {
    readonly thumbnail: {
        readonly " $fragmentRefs": FragmentRefs<"ContentImageFragment">;
    };
    readonly bodyText: {
        readonly fullText?: {
            readonly content: string | null;
            readonly kind: FullTextKind | null;
            readonly lang: string | null;
        } | null | undefined;
        readonly type?: string | undefined;
    } | null;
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
      "concreteType": "ImageAttachment",
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
      "alias": "bodyText",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "body"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
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
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "type",
              "storageKey": null
            }
          ],
          "type": "FullTextProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"body\")"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = 'ca360d3e7637c24ba32390f7633caa66';
export default node;
