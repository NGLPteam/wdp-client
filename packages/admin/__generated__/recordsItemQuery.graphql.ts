/**
 * @generated SignedSource<<ef5f39e1400026c207e3648727e2f70c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type recordsItemQuery$variables = {
  slug: string;
};
export type recordsItemQuery$data = {
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityHarvestRecordsListFragment">;
  } | null | undefined;
};
export type recordsItemQuery = {
  response: recordsItemQuery$data;
  variables: recordsItemQuery$variables;
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
    "name": "recordsItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
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
    "name": "recordsItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
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
    "cacheID": "67ea7765c147f509e1db283227bfe73f",
    "id": null,
    "metadata": {},
    "name": "recordsItemQuery",
    "operationKind": "query",
    "text": "query recordsItemQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    ...EntityHarvestRecordsListFragment\n    id\n  }\n}\n\nfragment EntityHarvestRecordsListFragment on ChildEntity {\n  __isChildEntity: __typename\n  harvestRecords {\n    id\n    slug\n    createdAt\n    updatedAt\n    entityCount\n    identifier\n    harvestErrors {\n      code\n      id\n    }\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "715da3eb9fedb3f9c224ab36bf6eb0aa";

export default node;
