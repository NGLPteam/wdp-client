/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type EntityHeroFragment = {
    readonly title?: string | undefined;
    readonly heroImage?: {
        readonly storage: AttachmentStorage | null;
        readonly " $fragmentRefs": FragmentRefs<"HeroImageFragment">;
    } | undefined;
    readonly heroImageMetadata?: {
        readonly " $fragmentRefs": FragmentRefs<"HeroImageMetadataFragment">;
    } | null | undefined;
    readonly " $refType": "EntityHeroFragment";
};
export type EntityHeroFragment$data = EntityHeroFragment;
export type EntityHeroFragment$key = {
    readonly " $data"?: EntityHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityHeroFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
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
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityHeroFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = 'dee9362867845cf569bdbb251ef45366';
export default node;
