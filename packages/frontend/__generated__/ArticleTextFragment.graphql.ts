/**
 * @generated SignedSource<<dd50a0417b9d8d89932812cd41199822>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ArticleTextFragment$data = {
  readonly bodyText: {
    readonly fullText?: {
      readonly content: string | null;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"FullTextFragment">;
  } | null;
  readonly pdf: {
    readonly asset?: {
      readonly " $fragmentSpreads": FragmentRefs<"AssetInlinePDFFragment">;
    } | null;
  } | null;
  readonly thumbnail: {
    readonly storage: AttachmentStorage | null;
    readonly " $fragmentSpreads": FragmentRefs<"ContentImageFragment">;
  };
  readonly " $fragmentType": "ArticleTextFragment";
};
export type ArticleTextFragment$key = {
  readonly " $data"?: ArticleTextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleTextFragment">;
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

(node as any).hash = "c76d83f0fc7bb18d9ae77bc1a1afcc55";

export default node;
