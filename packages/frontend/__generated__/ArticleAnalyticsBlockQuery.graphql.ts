/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AnalyticsPrecision = "DAY" | "HOUR" | "MONTH" | "QUARTER" | "WEEK" | "YEAR" | "%future added value";
export type DateFilterInput = {
    startDate?: string | null | undefined;
    endDate?: string | null | undefined;
    timeZone?: string | null | undefined;
};
export type ArticleAnalyticsBlockQueryVariables = {
    dateRange?: DateFilterInput | null | undefined;
    precision?: AnalyticsPrecision | null | undefined;
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
  $precision: AnalyticsPrecision = YEAR
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...ArticleAnalyticsBlockFragment_1IRn52
    id
  }
}

fragment ArticleAnalyticsBlockFragment_1IRn52 on Item {
  assetDownloads(dateFilter: $dateRange, precision: $precision) {
    total
    results {
      count
      date
    }
  }
  assetDownloadsByRegion(dateFilter: $dateRange) {
    total
    results {
      countryCode
      regionCode
      count
    }
  }
  entityViews(dateFilter: $dateRange, precision: $precision) {
    total
    results {
      count
      date
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
var v0 = {
  "defaultValue": {},
  "kind": "LocalArgument",
  "name": "dateRange"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": "YEAR",
  "kind": "LocalArgument",
  "name": "precision"
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v4 = {
  "kind": "Variable",
  "name": "precision",
  "variableName": "precision"
},
v5 = {
  "kind": "Variable",
  "name": "dateFilter",
  "variableName": "dateRange"
},
v6 = [
  (v5/*: any*/),
  (v4/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "total",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v9 = [
  (v7/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "AnalyticsEventCountResult",
    "kind": "LinkedField",
    "name": "results",
    "plural": true,
    "selections": [
      (v8/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v10 = [
  (v5/*: any*/)
],
v11 = [
  (v7/*: any*/),
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
      (v8/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArticleAnalyticsBlockQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
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
              },
              (v4/*: any*/)
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "ArticleAnalyticsBlockQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
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
                "args": (v6/*: any*/),
                "concreteType": "AnalyticsEventCountSummary",
                "kind": "LinkedField",
                "name": "assetDownloads",
                "plural": false,
                "selections": (v9/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "concreteType": "AnalyticsRegionCountSummary",
                "kind": "LinkedField",
                "name": "assetDownloadsByRegion",
                "plural": false,
                "selections": (v11/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v6/*: any*/),
                "concreteType": "AnalyticsEventCountSummary",
                "kind": "LinkedField",
                "name": "entityViews",
                "plural": false,
                "selections": (v9/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "concreteType": "AnalyticsRegionCountSummary",
                "kind": "LinkedField",
                "name": "entityViewsByRegion",
                "plural": false,
                "selections": (v11/*: any*/),
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
    "cacheID": "2d82b42a83c44e5920f70afadf6b6292",
    "id": null,
    "metadata": {},
    "name": "ArticleAnalyticsBlockQuery",
    "operationKind": "query",
    "text": "query ArticleAnalyticsBlockQuery(\n  $dateRange: DateFilterInput = {}\n  $precision: AnalyticsPrecision = YEAR\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ArticleAnalyticsBlockFragment_1IRn52\n    id\n  }\n}\n\nfragment ArticleAnalyticsBlockFragment_1IRn52 on Item {\n  assetDownloads(dateFilter: $dateRange, precision: $precision) {\n    total\n    results {\n      count\n      date\n    }\n  }\n  assetDownloadsByRegion(dateFilter: $dateRange) {\n    total\n    results {\n      countryCode\n      regionCode\n      count\n    }\n  }\n  entityViews(dateFilter: $dateRange, precision: $precision) {\n    total\n    results {\n      count\n      date\n    }\n  }\n  entityViewsByRegion(dateFilter: $dateRange) {\n    total\n    results {\n      countryCode\n      regionCode\n      count\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = 'bf1664d6aa89dca7eb3837be3d98c548';
export default node;
