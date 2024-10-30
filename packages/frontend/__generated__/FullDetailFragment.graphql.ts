/**
 * @generated SignedSource<<342e5be2d9d9e375c9601b361d1a0f73>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FullDetailFragment$data = {
  readonly fullText?: {
    readonly fullText?: {
      readonly content: string | null | undefined;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"FullTextFragment">;
  } | null | undefined;
  readonly thumbnail?: {
    readonly storage: AttachmentStorage | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ContentImageFragment">;
  };
  readonly " $fragmentType": "FullDetailFragment";
};
export type FullDetailFragment$key = {
  readonly " $data"?: FullDetailFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FullDetailFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
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
v1 = [
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
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FullDetailFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "alias": "fullText",
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
          "selections": (v1/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"body\")"
        }
      ],
      "type": "Item",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "alias": "fullText",
          "args": [
            {
              "kind": "Literal",
              "name": "fullPath",
              "value": "description"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "schemaProperty",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": "schemaProperty(fullPath:\"description\")"
        }
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();

(node as any).hash = "249c7fd9afd24fb461caf47708a44921";

export default node;
