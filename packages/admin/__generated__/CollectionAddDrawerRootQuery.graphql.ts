/**
 * @generated SignedSource<<a69bb14bf04d5c93d4634c2b2e8bfd56>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type CollectionAddDrawerRootQuery$variables = {
  schemaKind: SchemaKind;
};
export type CollectionAddDrawerRootQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CollectionAddFormFragment">;
};
export type CollectionAddDrawerRootQuery = {
  response: CollectionAddDrawerRootQuery$data;
  variables: CollectionAddDrawerRootQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "schemaKind"
  }
],
v1 = {
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
    "name": "CollectionAddDrawerRootQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CollectionAddFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CollectionAddDrawerRootQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "kind",
            "variableName": "schemaKind"
          }
        ],
        "concreteType": "SchemaVersionOption",
        "kind": "LinkedField",
        "name": "schemaVersionOptions",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "label",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "value",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SchemaDefinition",
            "kind": "LinkedField",
            "name": "schemaDefinition",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "slug",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CommunityEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Community",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "de3fb5a1ca30d54ad4c694ca5f73cb45",
    "id": null,
    "metadata": {},
    "name": "CollectionAddDrawerRootQuery",
    "operationKind": "query",
    "text": "query CollectionAddDrawerRootQuery(\n  $schemaKind: SchemaKind!\n) {\n  ...CollectionAddFormFragment\n}\n\nfragment CollectionAddFormFragment on Query {\n  ...SchemaSelectFragment\n  ...CommunitySelectFragment\n}\n\nfragment CommunitySelectFragment on Query {\n  communities {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment SchemaSelectFragment on Query {\n  schemaVersionOptions(kind: $schemaKind) {\n    label\n    value\n    schemaDefinition {\n      slug\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8375bf489bd919098e6e68b4d7a35b80";

export default node;
