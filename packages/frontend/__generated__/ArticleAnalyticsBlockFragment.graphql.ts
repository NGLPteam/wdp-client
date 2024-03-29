/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import ArticleAnalyticsBlockQuery from "./ArticleAnalyticsBlockQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type ArticleAnalyticsBlockFragment = {
    readonly downloadsByDate: {
        readonly total: number;
        readonly unfilteredTotal: number;
        readonly minDate: string | null;
        readonly results: ReadonlyArray<{
            readonly count: number;
            readonly date: string;
        }>;
    };
    readonly assetDownloadsByRegion: {
        readonly total: number;
        readonly results: ReadonlyArray<{
            readonly countryCode: string;
            readonly regionCode: string;
            readonly count: number;
        }>;
    };
    readonly viewsByDate: {
        readonly total: number;
        readonly unfilteredTotal: number;
        readonly minDate: string | null;
        readonly results: ReadonlyArray<{
            readonly count: number;
            readonly date: string;
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
var v0 = {
  "kind": "Variable",
  "name": "dateFilter",
  "variableName": "dateRange"
},
v1 = [
  (v0/*: any*/),
  {
    "kind": "Variable",
    "name": "precision",
    "variableName": "precision"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "total",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
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
      (v3/*: any*/),
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
v5 = [
  (v0/*: any*/),
  {
    "kind": "Variable",
    "name": "usOnly",
    "variableName": "usOnly"
  }
],
v6 = [
  (v2/*: any*/),
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
      (v3/*: any*/)
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
    },
    {
      "defaultValue": "YEAR",
      "kind": "LocalArgument",
      "name": "precision"
    },
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "usOnly"
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
      "alias": "downloadsByDate",
      "args": (v1/*: any*/),
      "concreteType": "AnalyticsEventCountSummary",
      "kind": "LinkedField",
      "name": "assetDownloads",
      "plural": false,
      "selections": (v4/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": (v5/*: any*/),
      "concreteType": "AnalyticsRegionCountSummary",
      "kind": "LinkedField",
      "name": "assetDownloadsByRegion",
      "plural": false,
      "selections": (v6/*: any*/),
      "storageKey": null
    },
    {
      "alias": "viewsByDate",
      "args": (v1/*: any*/),
      "concreteType": "AnalyticsEventCountSummary",
      "kind": "LinkedField",
      "name": "entityViews",
      "plural": false,
      "selections": (v4/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": (v5/*: any*/),
      "concreteType": "AnalyticsRegionCountSummary",
      "kind": "LinkedField",
      "name": "entityViewsByRegion",
      "plural": false,
      "selections": (v6/*: any*/),
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
(node as any).hash = 'f614c7af4512d87593e7fd2e8f064b41';
export default node;
