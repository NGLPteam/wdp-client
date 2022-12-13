/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type getStaticPathsCommunitiesQueryVariables = {};
export type getStaticPathsCommunitiesQueryResponse = {
    readonly communities: {
        readonly nodes: ReadonlyArray<{
            readonly slug: string;
        }>;
    };
};
export type getStaticPathsCommunitiesQuery = {
    readonly response: getStaticPathsCommunitiesQueryResponse;
    readonly variables: getStaticPathsCommunitiesQueryVariables;
};



/*
query getStaticPathsCommunitiesQuery {
  communities {
    nodes {
      slug
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getStaticPathsCommunitiesQuery",
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
              (v0/*: any*/)
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
    "name": "getStaticPathsCommunitiesQuery",
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
    ]
  },
  "params": {
    "cacheID": "97742693e3be3e1cbb39ca5d9929c50e",
    "id": null,
    "metadata": {},
    "name": "getStaticPathsCommunitiesQuery",
    "operationKind": "query",
    "text": "query getStaticPathsCommunitiesQuery {\n  communities {\n    nodes {\n      slug\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0c428068276ad63885559e7777d71ddf';
export default node;
