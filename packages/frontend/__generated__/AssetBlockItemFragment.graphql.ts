/**
 * @generated SignedSource<<7de99a4e82386c0627b713411ba21f5c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AssetKind = "audio" | "document" | "image" | "pdf" | "unknown" | "video" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type AssetBlockItemFragment$data = {
  readonly caption: string | null;
  readonly contentType: string;
  readonly downloadUrl: string | null;
  readonly fileSize: number;
  readonly kind: AssetKind;
  readonly name: string;
  readonly slug: String;
  readonly updatedAt?: String;
  readonly " $fragmentSpreads": FragmentRefs<"AssetThumbnailFragment">;
  readonly " $fragmentType": "AssetBlockItemFragment";
};
export type AssetBlockItemFragment$key = {
  readonly " $data"?: AssetBlockItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AssetBlockItemFragment">;
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

(node as any).hash = "9237ed01f1d967d942552b5936f0e66f";

export default node;
