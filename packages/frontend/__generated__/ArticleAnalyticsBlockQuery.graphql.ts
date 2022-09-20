/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DateFilterInput = {
    startDate?: string | null | undefined;
    endDate?: string | null | undefined;
    timeZone?: string | null | undefined;
};
export type ArticleAnalyticsBlockQueryVariables = {
    dateRange?: DateFilterInput | null | undefined;
    id: string;
};
export type ArticleAnalyticsBlockQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"ArticleAnalyticsBlockFragment">;
    } | null;
};
export type ArticleAnalyticsBlockQuery = {
    readonly response: ArticleAnalyticsBlockQueryResponse;
    readonly variables: ArticleAnalyticsBlockQueryVariables;
};



/*
query ArticleAnalyticsBlockQuery(
  $dateRange: DateFilterInput = {}
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...ArticleAnalyticsBlockFragment_1ez6mB
    id
  }
}

fragment ArticleAnalyticsBlockFragment_1ez6mB on Item {
  assetDownloadsByRegion(dateFilter: $dateRange) {
    total
    results {
      countryCode
      regionCode
      count
    }
  }
  entityViewsByRegion(dateFilter: $dateRange) {
    total
    results {
      countryCode
      regionCode
      count
    }
  }
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": {},
    "kind": "LocalArgument",
    "name": "dateRange"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "dateFilter",
    "variableName": "dateRange"
  }
],
v3 = [
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
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArticleAnalyticsBlockQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "dateRange",
                "variableName": "dateRange"
              }
            ],
            "kind": "FragmentSpread",
            "name": "ArticleAnalyticsBlockFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ArticleAnalyticsBlockQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
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
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "AnalyticsRegionCountSummary",
                "kind": "LinkedField",
                "name": "assetDownloadsByRegion",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "AnalyticsRegionCountSummary",
                "kind": "LinkedField",
                "name": "entityViewsByRegion",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              }
            ],
            "type": "Item",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "aaf13529b62af2ed58a28741b1177443",
    "id": null,
    "metadata": {},
    "name": "ArticleAnalyticsBlockQuery",
    "operationKind": "query",
    "text": "query ArticleAnalyticsBlockQuery(\n  $dateRange: DateFilterInput = {}\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ArticleAnalyticsBlockFragment_1ez6mB\n    id\n  }\n}\n\nfragment ArticleAnalyticsBlockFragment_1ez6mB on Item {\n  assetDownloadsByRegion(dateFilter: $dateRange) {\n    total\n    results {\n      countryCode\n      regionCode\n      count\n    }\n  }\n  entityViewsByRegion(dateFilter: $dateRange) {\n    total\n    results {\n      countryCode\n      regionCode\n      count\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = 'b1f85406fa3e849ade4292df41a6ac95';
export default node;
