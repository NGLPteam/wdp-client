/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "METADATA" | "%future added value";
export type CollectionAddDrawerRootQueryVariables = {
    schemaKind: SchemaKind;
};
export type CollectionAddDrawerRootQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"CollectionAddFormFragment">;
};
export type CollectionAddDrawerRootQuery = {
    readonly response: CollectionAddDrawerRootQueryResponse;
    readonly variables: CollectionAddDrawerRootQueryVariables;
};



/*
query CollectionAddDrawerRootQuery(
  $schemaKind: SchemaKind!
) {
  ...CollectionAddFormFragment
}

fragment CollectionAddFormFragment on Query {
  ...SchemaSelectFragment
  ...CommunitySelectFragment
}

fragment CommunitySelectFragment on Query {
  communities {
    edges {
      node {
        id
        name
      }
    }
  }
}

fragment SchemaSelectFragment on Query {
  schemaVersionOptions(kind: $schemaKind) {
    label
    value
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "schemaKind"
  }
];
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
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
    "cacheID": "a0262bffd549e448765735e09364363d",
    "id": null,
    "metadata": {},
    "name": "CollectionAddDrawerRootQuery",
    "operationKind": "query",
    "text": "query CollectionAddDrawerRootQuery(\n  $schemaKind: SchemaKind!\n) {\n  ...CollectionAddFormFragment\n}\n\nfragment CollectionAddFormFragment on Query {\n  ...SchemaSelectFragment\n  ...CommunitySelectFragment\n}\n\nfragment CommunitySelectFragment on Query {\n  communities {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment SchemaSelectFragment on Query {\n  schemaVersionOptions(kind: $schemaKind) {\n    label\n    value\n  }\n}\n"
  }
};
})();
(node as any).hash = '8375bf489bd919098e6e68b4d7a35b80';
export default node;
