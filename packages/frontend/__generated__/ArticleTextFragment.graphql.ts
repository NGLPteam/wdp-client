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
        readonly " $fragmentRefs": FragmentRefs<"FullTextPropertyFragment">;
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "FullTextPropertyFragment"
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"body\")"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = '640387fb8a41dd01acfa1283a2af92b4';
export default node;
