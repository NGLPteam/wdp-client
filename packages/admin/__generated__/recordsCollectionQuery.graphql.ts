/**
 * @generated SignedSource<<c4f303f434a24639fe69fb0322f740c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type recordsCollectionQuery$variables = {
  slug: string;
};
export type recordsCollectionQuery$data = {
  readonly collection: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityHarvestRecordsListFragment">;
  } | null | undefined;
};
export type recordsCollectionQuery = {
  response: recordsCollectionQuery$data;
  variables: recordsCollectionQuery$variables;
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "recordsCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityHarvestRecordsListFragment"
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
    "name": "recordsCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "HarvestRecord",
                "kind": "LinkedField",
                "name": "harvestRecords",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
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
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "updatedAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "entityCount",
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
                    "concreteType": "HarvestError",
                    "kind": "LinkedField",
                    "name": "harvestErrors",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "code",
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "status",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "ChildEntity",
            "abstractKey": "__isChildEntity"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1422b91f90ba6bd7dab32049230839ab",
    "id": null,
    "metadata": {},
    "name": "recordsCollectionQuery",
    "operationKind": "query",
    "text": "query recordsCollectionQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    ...EntityHarvestRecordsListFragment\n    id\n  }\n}\n\nfragment EntityHarvestRecordsListFragment on ChildEntity {\n  __isChildEntity: __typename\n  harvestRecords {\n    id\n    slug\n    createdAt\n    updatedAt\n    entityCount\n    identifier\n    harvestErrors {\n      code\n      id\n    }\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "a3e6f01faf13341b4c79476c461b7d06";

export default node;
