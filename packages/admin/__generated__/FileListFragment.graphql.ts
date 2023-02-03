/**
 * @generated SignedSource<<d9a96a26257aebe3dcc003b70564e355>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AssetKind = "audio" | "document" | "image" | "pdf" | "unknown" | "video" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FileListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly downloadUrl?: string | null;
    readonly id?: string;
    readonly kind?: AssetKind;
    readonly name?: string;
    readonly slug?: String;
    readonly " $fragmentSpreads": FragmentRefs<"AssetThumbnailColumnFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "FileListFragment";
};
export type FileListFragment$key = {
  readonly " $data"?: FileListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FileListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FileListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
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
              "name": "downloadUrl",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "AssetThumbnailColumnFragment"
            }
          ],
          "type": "Asset",
          "abstractKey": "__isAsset"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "AnyAssetConnection",
  "abstractKey": null
};

(node as any).hash = "cdbeccbc4ed8a1ec3d8c5c860f452204";

export default node;
