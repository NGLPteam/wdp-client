/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type getStaticPathsCommunitySchemasQueryVariables = {};
export type getStaticPathsCommunitySchemasQueryResponse = {
    readonly communities: {
        readonly nodes: ReadonlyArray<{
            readonly slug: string;
            readonly schemaRanks: ReadonlyArray<{
                readonly slug: string;
            }>;
        }>;
    };
};
export type getStaticPathsCommunitySchemasQuery = {
    readonly response: getStaticPathsCommunitySchemasQueryResponse;
    readonly variables: getStaticPathsCommunitySchemasQueryVariables;
};



/*
query getStaticPathsCommunitySchemasQuery {
  communities {
    nodes {
      slug
      schemaRanks {
        slug
        id
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getStaticPathsCommunitySchemasQuery",
    "selections": [
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
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "HierarchicalSchemaRank",
                "kind": "LinkedField",
                "name": "schemaRanks",
                "plural": true,
                "selections": [
                  (v0/*: any*/)
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
    "name": "getStaticPathsCommunitySchemasQuery",
    "selections": [
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
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "HierarchicalSchemaRank",
                "kind": "LinkedField",
                "name": "schemaRanks",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/)
                ],
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9ce5226acf5b62eb238db8d294083395",
    "id": null,
    "metadata": {},
    "name": "getStaticPathsCommunitySchemasQuery",
    "operationKind": "query",
    "text": "query getStaticPathsCommunitySchemasQuery {\n  communities {\n    nodes {\n      slug\n      schemaRanks {\n        slug\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '88675f4ab101d092898d2364db959a7a';
export default node;
