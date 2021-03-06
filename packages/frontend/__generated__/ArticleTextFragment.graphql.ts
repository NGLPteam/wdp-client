/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type ArticleTextFragment = {
    readonly thumbnail: {
        readonly storage: AttachmentStorage | null;
        readonly " $fragmentRefs": FragmentRefs<"ContentImageFragment">;
    };
    readonly bodyText: {
        readonly fullText?: {
            readonly content: string | null;
        } | null | undefined;
        readonly " $fragmentRefs": FragmentRefs<"FullTextFragment">;
    } | null;
    readonly pdf: {
        readonly asset?: {
            readonly " $fragmentRefs": FragmentRefs<"AssetInlinePDFFragment">;
        } | null | undefined;
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "storage",
          "storageKey": null
        },
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
                }
              ],
              "storageKey": null
            }
          ],
          "type": "FullTextProperty",
          "abstractKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FullTextFragment"
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"body\")"
    },
    {
      "alias": "pdf",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "pdf_version"
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
              "concreteType": null,
              "kind": "LinkedField",
              "name": "asset",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "AssetInlinePDFFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "type": "AssetProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = 'c76d83f0fc7bb18d9ae77bc1a1afcc55';
export default node;
