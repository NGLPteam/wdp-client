/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import ArticleChartWrapperQuery from "./ArticleChartWrapperQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type ArticleChartWrapperFragment = {
    readonly assetDownloadsByRegion: {
        readonly total: number;
        readonly results: ReadonlyArray<{
            readonly countryCode: string;
            readonly regionCode: string;
            readonly count: number;
        }>;
    };
    readonly entityViewsByRegion: {
        readonly total: number;
        readonly results: ReadonlyArray<{
            readonly countryCode: string;
            readonly regionCode: string;
            readonly count: number;
        }>;
    };
    readonly id: string;
    readonly " $refType": "ArticleChartWrapperFragment";
};
export type ArticleChartWrapperFragment$data = ArticleChartWrapperFragment;
export type ArticleChartWrapperFragment$key = {
    readonly " $data"?: ArticleChartWrapperFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleChartWrapperFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "dateFilter",
    "variableName": "dateRange"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "AnalyticsRegionCountResult",
    "kind": "LinkedField",
    "name": "results",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "countryCode",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "regionCode",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "count",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": {},
      "kind": "LocalArgument",
      "name": "dateRange"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": ArticleChartWrapperQuery,
      "identifierField": "id"
    }
  },
  "name": "ArticleChartWrapperFragment",
  "selections": [
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "AnalyticsRegionCountSummary",
      "kind": "LinkedField",
      "name": "assetDownloadsByRegion",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "AnalyticsRegionCountSummary",
      "kind": "LinkedField",
      "name": "entityViewsByRegion",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();
(node as any).hash = '77bfbd5e62767027efd4924c544fa133';
export default node;
