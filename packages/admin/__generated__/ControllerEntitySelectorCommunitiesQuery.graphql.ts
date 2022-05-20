/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ControllerEntitySelectorCommunitiesQueryVariables = {};
export type ControllerEntitySelectorCommunitiesQueryResponse = {
    readonly communities: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly __typename: string;
                readonly id: string;
                readonly title: string;
                readonly slug: string;
            };
        }>;
    };
};
export type ControllerEntitySelectorCommunitiesQuery = {
    readonly response: ControllerEntitySelectorCommunitiesQueryResponse;
    readonly variables: ControllerEntitySelectorCommunitiesQueryVariables;
};



/*
query ControllerEntitySelectorCommunitiesQuery {
  communities {
    edges {
      node {
        __typename
        id
        title
        slug
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
                "name": "__typename",
                "storageKey": null
              },
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
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "slug",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ControllerEntitySelectorCommunitiesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ControllerEntitySelectorCommunitiesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "771124d2d932738f5b55bb72d62f72e3",
    "id": null,
    "metadata": {},
    "name": "ControllerEntitySelectorCommunitiesQuery",
    "operationKind": "query",
    "text": "query ControllerEntitySelectorCommunitiesQuery {\n  communities {\n    edges {\n      node {\n        __typename\n        id\n        title\n        slug\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '9cecf5a469d250792927a5f239b9524d';
export default node;
