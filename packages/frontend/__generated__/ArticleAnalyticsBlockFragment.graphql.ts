/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import ArticleAnalyticsBlockQuery from "./ArticleAnalyticsBlockQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type ArticleAnalyticsBlockFragment = {
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
    readonly " $refType": "ArticleAnalyticsBlockFragment";
};
export type ArticleAnalyticsBlockFragment$data = ArticleAnalyticsBlockFragment;
export type ArticleAnalyticsBlockFragment$key = {
    readonly " $data"?: ArticleAnalyticsBlockFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleAnalyticsBlockFragment">;
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
      "operation": ArticleAnalyticsBlockQuery,
      "identifierField": "id"
    }
  },
  "name": "ArticleAnalyticsBlockFragment",
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
(node as any).hash = 'b1f85406fa3e849ade4292df41a6ac95';
export default node;
