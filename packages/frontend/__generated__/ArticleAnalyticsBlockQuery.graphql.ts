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
    usOnly?: boolean | null | undefined;
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
  $usOnly: Boolean = false
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...ArticleAnalyticsBlockFragment_3yzii9
    id
  }
}

fragment ArticleAnalyticsBlockFragment_3yzii9 on Item {
  downloadsByDate: assetDownloads(dateFilter: $dateRange, precision: $precision) {
    total
    minDate
    results {
      count
      date
    }
  }
  assetDownloadsByRegion(dateFilter: $dateRange, usOnly: $usOnly) {
    total
    results {
      countryCode
      regionCode
      count
    }
  }
  viewsByDate: entityViews(dateFilter: $dateRange, precision: $precision) {
    total
    minDate
    results {
      count
      date
    }
  }
  entityViewsByRegion(dateFilter: $dateRange, usOnly: $usOnly) {
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
v3 = {
  "defaultValue": false,
  "kind": "LocalArgument",
  "name": "usOnly"
},
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v5 = {
  "kind": "Variable",
  "name": "precision",
  "variableName": "precision"
},
v6 = {
  "kind": "Variable",
  "name": "usOnly",
  "variableName": "usOnly"
},
v7 = {
  "kind": "Variable",
  "name": "dateFilter",
  "variableName": "dateRange"
},
v8 = [
  (v7/*: any*/),
  (v5/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "total",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v11 = [
  (v9/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "minDate",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "AnalyticsEventCountResult",
    "kind": "LinkedField",
    "name": "results",
    "plural": true,
    "selections": [
      (v10/*: any*/),
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
v12 = [
  (v7/*: any*/),
  (v6/*: any*/)
],
v13 = [
  (v9/*: any*/),
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
      (v10/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArticleAnalyticsBlockQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
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
              (v5/*: any*/),
              (v6/*: any*/)
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
      (v3/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "ArticleAnalyticsBlockQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
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
                "alias": "downloadsByDate",
                "args": (v8/*: any*/),
                "concreteType": "AnalyticsEventCountSummary",
                "kind": "LinkedField",
                "name": "assetDownloads",
                "plural": false,
                "selections": (v11/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v12/*: any*/),
                "concreteType": "AnalyticsRegionCountSummary",
                "kind": "LinkedField",
                "name": "assetDownloadsByRegion",
                "plural": false,
                "selections": (v13/*: any*/),
                "storageKey": null
              },
              {
                "alias": "viewsByDate",
                "args": (v8/*: any*/),
                "concreteType": "AnalyticsEventCountSummary",
                "kind": "LinkedField",
                "name": "entityViews",
                "plural": false,
                "selections": (v11/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v12/*: any*/),
                "concreteType": "AnalyticsRegionCountSummary",
                "kind": "LinkedField",
                "name": "entityViewsByRegion",
                "plural": false,
                "selections": (v13/*: any*/),
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
    "cacheID": "23fcbd29f7dc1bfb5f98105ab5d06a89",
    "id": null,
    "metadata": {},
    "name": "ArticleAnalyticsBlockQuery",
    "operationKind": "query",
    "text": "query ArticleAnalyticsBlockQuery(\n  $dateRange: DateFilterInput = {}\n  $precision: AnalyticsPrecision = YEAR\n  $usOnly: Boolean = false\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ArticleAnalyticsBlockFragment_3yzii9\n    id\n  }\n}\n\nfragment ArticleAnalyticsBlockFragment_3yzii9 on Item {\n  downloadsByDate: assetDownloads(dateFilter: $dateRange, precision: $precision) {\n    total\n    minDate\n    results {\n      count\n      date\n    }\n  }\n  assetDownloadsByRegion(dateFilter: $dateRange, usOnly: $usOnly) {\n    total\n    results {\n      countryCode\n      regionCode\n      count\n    }\n  }\n  viewsByDate: entityViews(dateFilter: $dateRange, precision: $precision) {\n    total\n    minDate\n    results {\n      count\n      date\n    }\n  }\n  entityViewsByRegion(dateFilter: $dateRange, usOnly: $usOnly) {\n    total\n    results {\n      countryCode\n      regionCode\n      count\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = 'f5c07b3b9ec84773ae4ff36d2a17fd69';
export default node;
