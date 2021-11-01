/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "METADATA" | "%future added value";
export type SchemaSelectorModalOptionsQueryVariables = {};
export type SchemaSelectorModalOptionsQueryResponse = {
    readonly schemaVersions: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly name: string;
                readonly namespace: string;
                readonly identifier: string;
                readonly kind: SchemaKind;
                readonly slug: string;
                readonly number: string;
            };
        }>;
    };
};
export type SchemaSelectorModalOptionsQuery = {
    readonly response: SchemaSelectorModalOptionsQueryResponse;
    readonly variables: SchemaSelectorModalOptionsQueryVariables;
};



/*
query SchemaSelectorModalOptionsQuery {
  schemaVersions {
    edges {
      node {
        name
        namespace
        identifier
        kind
        slug
        number
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "namespace",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "number",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SchemaSelectorModalOptionsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SchemaVersionConnection",
        "kind": "LinkedField",
        "name": "schemaVersions",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SchemaVersionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SchemaVersion",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SchemaSelectorModalOptionsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SchemaVersionConnection",
        "kind": "LinkedField",
        "name": "schemaVersions",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SchemaVersionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SchemaVersion",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f1de8803ee11bcc48f6aec366c5fe389",
    "id": null,
    "metadata": {},
    "name": "SchemaSelectorModalOptionsQuery",
    "operationKind": "query",
    "text": "query SchemaSelectorModalOptionsQuery {\n  schemaVersions {\n    edges {\n      node {\n        name\n        namespace\n        identifier\n        kind\n        slug\n        number\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '6762cbbe1a4c0452f5b6bb87b946e4a4';
export default node;
