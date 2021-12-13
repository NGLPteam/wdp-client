/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AssetPropertyFragment = {
    readonly fullPath: string;
    readonly label: string;
    readonly asset: {
        readonly name?: string | undefined;
        readonly downloadUrl?: string | null | undefined;
    } | null;
    readonly " $refType": "AssetPropertyFragment";
};
export type AssetPropertyFragment$data = AssetPropertyFragment;
export type AssetPropertyFragment$key = {
    readonly " $data"?: AssetPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AssetPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "asset",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
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
              "name": "downloadUrl",
              "storageKey": null
            }
          ],
          "type": "Asset",
          "abstractKey": "__isAsset"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AssetProperty",
  "abstractKey": null
};
(node as any).hash = 'f2875a1a266173bb3aa59e686a3a5446';
export default node;
