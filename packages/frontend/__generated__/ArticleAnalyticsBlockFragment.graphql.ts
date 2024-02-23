/**
 * @generated SignedSource<<6082bfb450657327067cb3e79861f86c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleAnalyticsBlockFragment$data = {
  readonly assetDownloadsByRegion: {
    readonly results: ReadonlyArray<{
      readonly count: number;
      readonly countryCode: string;
      readonly regionCode: string;
    }>;
    readonly total: number;
  };
  readonly downloadsByDate: {
    readonly minDate: string | null | undefined;
    readonly results: ReadonlyArray<{
      readonly count: number;
      readonly date: string;
    }>;
    readonly total: number;
    readonly unfilteredTotal: number;
  };
  readonly entityViewsByRegion: {
    readonly results: ReadonlyArray<{
      readonly count: number;
      readonly countryCode: string;
      readonly regionCode: string;
    }>;
    readonly total: number;
  };
  readonly id: string;
  readonly viewsByDate: {
    readonly minDate: string | null | undefined;
    readonly results: ReadonlyArray<{
      readonly count: number;
      readonly date: string;
    }>;
    readonly total: number;
    readonly unfilteredTotal: number;
  };
  readonly " $fragmentType": "ArticleAnalyticsBlockFragment";
};
export type ArticleAnalyticsBlockFragment$key = {
  readonly " $data"?: ArticleAnalyticsBlockFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleAnalyticsBlockFragment">;
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
      "operation": require('./ArticleAnalyticsBlockQuery.graphql'),
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
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

(node as any).hash = "f614c7af4512d87593e7fd2e8f064b41";

export default node;
