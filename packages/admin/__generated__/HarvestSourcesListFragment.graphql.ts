/**
 * @generated SignedSource<<accafb7d5218e56b94a56cd9be49ad28>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestMetadataFormat = "JATS" | "METS" | "MODS" | "OAIDC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestSourcesListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly baseURL: string;
    readonly description: string | null | undefined;
    readonly harvestRecords: {
      readonly pageInfo: {
        readonly totalCount: number;
      };
    };
    readonly harvestSets: {
      readonly pageInfo: {
        readonly totalCount: number;
      };
    };
    readonly identifier: string;
    readonly metadataFormat: HarvestMetadataFormat;
    readonly name: string;
    readonly slug: string;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "HarvestSourcesListFragment";
};
export type HarvestSourcesListFragment$key = {
  readonly " $data"?: HarvestSourcesListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestSourcesListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalCount",
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
  "name": "HarvestSourcesListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestSource",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
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
          "name": "identifier",
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
          "name": "metadataFormat",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "baseURL",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HarvestSetConnection",
          "kind": "LinkedField",
          "name": "harvestSets",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HarvestRecordConnection",
          "kind": "LinkedField",
          "name": "harvestRecords",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
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
  "type": "HarvestSourceConnection",
  "abstractKey": null
};
})();

(node as any).hash = "bdc863f5929d98f6e33a0643da0bec8e";

export default node;
