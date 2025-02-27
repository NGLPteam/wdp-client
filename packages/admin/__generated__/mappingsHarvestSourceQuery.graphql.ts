/**
 * @generated SignedSource<<adfeee83edbe8ccc5bd352629773d623>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type mappingsHarvestSourceQuery$variables = {
  slug: string;
};
export type mappingsHarvestSourceQuery$data = {
  readonly harvestSource: {
    readonly " $fragmentSpreads": FragmentRefs<"HarvestSourceLayoutFragment">;
  } | null | undefined;
};
export type mappingsHarvestSourceQuery = {
  response: mappingsHarvestSourceQuery$data;
  variables: mappingsHarvestSourceQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "mappingsHarvestSourceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HarvestSourceLayoutFragment"
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
    "name": "mappingsHarvestSourceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSource",
        "kind": "LinkedField",
        "name": "harvestSource",
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
            "name": "slug",
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cdd312042aed1f00fd0627dae53d0025",
    "id": null,
    "metadata": {},
    "name": "mappingsHarvestSourceQuery",
    "operationKind": "query",
    "text": "query mappingsHarvestSourceQuery(\n  $slug: Slug!\n) {\n  harvestSource(slug: $slug) {\n    ...HarvestSourceLayoutFragment\n    id\n  }\n}\n\nfragment HarvestSourceLayoutFragment on HarvestSource {\n  __typename\n  slug\n  name\n}\n"
  }
};
})();

(node as any).hash = "1d828f963ac05397062b4955d111477a";

export default node;
