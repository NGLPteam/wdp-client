/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetKind = "audio" | "document" | "image" | "pdf" | "unknown" | "video" | "%future added value";
export type AssetBlockItemFragment = {
    readonly __typename: string;
    readonly caption: string | null;
    readonly contentType: string;
    readonly downloadUrl: string | null;
    readonly fileSize: number;
    readonly kind: AssetKind;
    readonly name: string;
    readonly slug: string;
    readonly updatedAt?: string | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetThumbnailFragment">;
    readonly " $refType": "AssetBlockItemFragment";
};
export type AssetBlockItemFragment$data = AssetBlockItemFragment;
export type AssetBlockItemFragment$key = {
    readonly " $data"?: AssetBlockItemFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetBlockItemFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "updatedAt",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetBlockItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "caption",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "contentType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "downloadUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fileSize",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AssetThumbnailFragment"
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "AssetDocument",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "AssetImage",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "AssetPDF",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "AssetAudio",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "AssetVideo",
      "abstractKey": null
    }
  ],
  "type": "Asset",
  "abstractKey": "__isAsset"
};
})();
(node as any).hash = '5c243025e5f8fce1753703781ead6a0f';
export default node;
