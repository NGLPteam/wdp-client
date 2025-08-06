/**
 * @generated SignedSource<<785e96ee697a5da8970136f420229337>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestMetadataFormat = "ESPLORO" | "JATS" | "METS" | "MODS" | "OAIDC" | "PRESSBOOKS" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestSourcesListFragment$data = {
  readonly harvestSources: {
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
      readonly id: string;
      readonly identifier: string;
      readonly metadataFormat: HarvestMetadataFormat;
      readonly name: string;
      readonly slug: string;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  };
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
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestSourcesListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "order",
          "value": "DEFAULT"
        },
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page"
        },
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 20
        }
      ],
      "concreteType": "HarvestSourceConnection",
      "kind": "LinkedField",
      "name": "harvestSources",
      "plural": false,
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
              "name": "id",
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
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "7b952e6a88ee78d3bb2c1c4cb8337187";

export default node;
