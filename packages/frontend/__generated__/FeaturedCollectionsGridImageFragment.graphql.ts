/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type FeaturedCollectionsGridImageFragment = {
    readonly thumbnail: {
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



const node: ReaderFragment = (function(){
var v0 = [
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
];
return {
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
      "name": "thumbnail",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "heroImage",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();
(node as any).hash = '97ef79ce0bd4c59504d919c0fb0b8e21';
export default node;
