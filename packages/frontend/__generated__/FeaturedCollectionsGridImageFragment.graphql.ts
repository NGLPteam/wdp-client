/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type FeaturedCollectionsGridImageFragment = {
    readonly heroImage: {
        readonly storage: AttachmentStorage | null;
        readonly image: {
            readonly webp: {
                readonly alt: string | null;
                readonly url: string | null;
                readonly width: number | null;
                readonly height: number | null;
            };
        };
    };
    readonly " $refType": "FeaturedCollectionsGridImageFragment";
};
export type FeaturedCollectionsGridImageFragment$data = FeaturedCollectionsGridImageFragment;
export type FeaturedCollectionsGridImageFragment$key = {
    readonly " $data"?: FeaturedCollectionsGridImageFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FeaturedCollectionsGridImageFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedCollectionsGridImageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "heroImage",
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
          "alias": "image",
          "args": null,
          "concreteType": "ImageSize",
          "kind": "LinkedField",
          "name": "large",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageDerivative",
              "kind": "LinkedField",
              "name": "webp",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "alt",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "url",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "width",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "height",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '1a841d4a04d6f6a9d97668dabbe973c5';
export default node;
