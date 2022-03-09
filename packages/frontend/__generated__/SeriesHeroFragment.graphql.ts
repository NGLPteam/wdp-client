/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type SeriesHeroFragment = {
    readonly slug: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly published: {
        readonly value: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly about: {
        readonly content?: string | null | undefined;
    } | null;
    readonly thumbnail: {
        readonly storage: AttachmentStorage | null;
        readonly " $fragmentRefs": FragmentRefs<"ContentImageFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"ArticleParentHeaderFragment">;
    readonly " $refType": "SeriesHeroFragment";
};
export type SeriesHeroFragment$data = SeriesHeroFragment;
export type SeriesHeroFragment$key = {
    readonly " $data"?: SeriesHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SeriesHeroFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SeriesHeroFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
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
      "concreteType": "VariablePrecisionDate",
      "kind": "LinkedField",
      "name": "published",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PrecisionDateFragment"
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
    },
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleParentHeaderFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'e02264ca004abf2bfa5fbae9150d6992';
export default node;
