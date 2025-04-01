/**
 * @generated SignedSource<<a751f62aa3792405e740f68272efa436>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type EntitySelectorControllerCommunitiesQuery$variables = Record<PropertyKey, never>;
export type EntitySelectorControllerCommunitiesQuery$data = {
  readonly communities: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly __typename: "Community";
        readonly id: string;
        readonly schemaVersion: {
          readonly identifier: string;
          readonly kind: SchemaKind;
          readonly name: string;
          readonly namespace: string;
        };
        readonly slug: string;
        readonly title: string;
      };
    }>;
  };
};
export type EntitySelectorControllerCommunitiesQuery = {
  response: EntitySelectorControllerCommunitiesQuery$data;
  variables: EntitySelectorControllerCommunitiesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "access",
    "value": "UPDATE"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "namespace",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EntitySelectorControllerCommunitiesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SchemaVersion",
                    "kind": "LinkedField",
                    "name": "schemaVersion",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/)
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
        "storageKey": "communities(access:\"UPDATE\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EntitySelectorControllerCommunitiesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SchemaVersion",
                    "kind": "LinkedField",
                    "name": "schemaVersion",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v2/*: any*/)
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
        "storageKey": "communities(access:\"UPDATE\")"
      }
    ]
  },
  "params": {
    "cacheID": "39e8c7878deba94c0d03c62078875653",
    "id": null,
    "metadata": {},
    "name": "EntitySelectorControllerCommunitiesQuery",
    "operationKind": "query",
    "text": "query EntitySelectorControllerCommunitiesQuery {\n  communities(access: UPDATE) {\n    edges {\n      node {\n        __typename\n        id\n        title\n        slug\n        schemaVersion {\n          name\n          kind\n          identifier\n          namespace\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "bb0eae8aefd276d2c4028abe6a34a9f5";

export default node;
