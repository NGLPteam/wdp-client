/**
 * @generated SignedSource<<67b8002646e3dd75942989f7594afacb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type EntityVisibility = "HIDDEN" | "LIMITED" | "VISIBLE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityHeroFragment$data = {
  readonly about?: {
    readonly content?: string | null;
  } | null;
  readonly currentlyHidden?: boolean;
  readonly heroImage?: {
    readonly storage: AttachmentStorage | null;
    readonly " $fragmentSpreads": FragmentRefs<"HeroImageFragment">;
  };
  readonly heroImageMetadata?: {
    readonly " $fragmentSpreads": FragmentRefs<"HeroImageMetadataFragment">;
  } | null;
  readonly published?: {
    readonly value: String | null;
    readonly " $fragmentSpreads": FragmentRefs<"PrecisionDateFragment">;
  };
  readonly subtitle?: string | null;
  readonly summary?: string | null;
  readonly thumbnail?: {
    readonly storage: AttachmentStorage | null;
    readonly " $fragmentSpreads": FragmentRefs<"ContentImageFragment">;
  };
  readonly title?: string;
  readonly visibility?: EntityVisibility;
  readonly " $fragmentType": "EntityHeroFragment";
};
export type EntityHeroFragment$key = {
  readonly " $data"?: EntityHeroFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityHeroFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "visibility",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "currentlyHidden",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "VariablePrecisionDate",
    "kind": "LinkedField",
    "name": "published",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "PrecisionDateFragment"
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "value",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": "about",
    "args": [
      {
        "kind": "Literal",
        "name": "fullPath",
        "value": "about"
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
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          }
        ],
        "type": "MarkdownProperty",
        "abstractKey": null
      }
    ],
    "storageKey": "schemaProperty(fullPath:\"about\")"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityHeroFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "subtitle",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "summary",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageAttachment",
          "kind": "LinkedField",
          "name": "thumbnail",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ContentImageFragment"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageAttachment",
          "kind": "LinkedField",
          "name": "heroImage",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "HeroImageFragment"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageMetadata",
          "kind": "LinkedField",
          "name": "heroImageMetadata",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "HeroImageMetadataFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    },
    {
      "kind": "InlineFragment",
      "selections": (v1/*: any*/),
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v1/*: any*/),
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();

(node as any).hash = "1543b15be55a80349d104e0efe6dbddd";

export default node;
