/**
 * @generated SignedSource<<377b4e68dadd92176752360b55fd6279>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AnalyticsPrecision = "DAY" | "HOUR" | "MONTH" | "QUARTER" | "WEEK" | "YEAR" | "%future added value";
export type DateFilterInput = {
  endDate?: string | null | undefined;
  startDate?: string | null | undefined;
  timeZone?: string | null | undefined;
};
export type pageTemplatesItemMetricsQuery$variables = {
  dateRange: DateFilterInput;
  precision: AnalyticsPrecision;
  slug: string;
  usOnly: boolean;
};
export type pageTemplatesItemMetricsQuery$data = {
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"ArticleAnalyticsBlockFragment">;
  } | null | undefined;
};
export type pageTemplatesItemMetricsQuery = {
  response: pageTemplatesItemMetricsQuery$data;
  variables: pageTemplatesItemMetricsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "dateRange"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "precision"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "usOnly"
},
v4 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
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
    "name": "unfilteredTotal",
    "storageKey": null
  },
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
    "name": "pageTemplatesItemMetricsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
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
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "pageTemplatesItemMetricsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4d11292879824612b9865cc7100b0780",
    "id": null,
    "metadata": {},
    "name": "pageTemplatesItemMetricsQuery",
    "operationKind": "query",
    "text": "query pageTemplatesItemMetricsQuery(\n  $slug: Slug!\n  $dateRange: DateFilterInput!\n  $precision: AnalyticsPrecision!\n  $usOnly: Boolean!\n) {\n  item(slug: $slug) {\n    ...ArticleAnalyticsBlockFragment_3yzii9\n    id\n  }\n}\n\nfragment ArticleAnalyticsBlockFragment_3yzii9 on Item {\n  downloadsByDate: assetDownloads(dateFilter: $dateRange, precision: $precision) {\n    total\n    unfilteredTotal\n    minDate\n    results {\n      count\n      date\n    }\n  }\n  assetDownloadsByRegion(dateFilter: $dateRange, usOnly: $usOnly) {\n    total\n    results {\n      countryCode\n      regionCode\n      count\n    }\n  }\n  viewsByDate: entityViews(dateFilter: $dateRange, precision: $precision) {\n    total\n    unfilteredTotal\n    minDate\n    results {\n      count\n      date\n    }\n  }\n  entityViewsByRegion(dateFilter: $dateRange, usOnly: $usOnly) {\n    total\n    results {\n      countryCode\n      regionCode\n      count\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "b28bb6671029d8ea756bc5f33acc566b";

export default node;
