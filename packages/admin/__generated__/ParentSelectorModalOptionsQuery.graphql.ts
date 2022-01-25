/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ParentSelectorModalOptionsQueryVariables = {};
export type ParentSelectorModalOptionsQueryResponse = {
    readonly viewer: {
        readonly collections: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                    readonly title: string;
                };
            }>;
        };
    };
    readonly communities: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly title: string;
            };
        }>;
    };
};
export type ParentSelectorModalOptionsQuery = {
    readonly response: ParentSelectorModalOptionsQueryResponse;
    readonly variables: ParentSelectorModalOptionsQueryVariables;
};



/*
query ParentSelectorModalOptionsQuery {
  viewer {
    collections {
      edges {
        node {
          id
          title
        }
      }
    }
    id
  }
  communities {
    edges {
      node {
        id
        title
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
  "name": "id",
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  }
],
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "CollectionConnection",
  "kind": "LinkedField",
  "name": "collections",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
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
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ParentSelectorModalOptionsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      (v3/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ParentSelectorModalOptionsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      (v3/*: any*/)
    ]
  },
  "params": {
    "cacheID": "a5c9caca2f0d426fdd4c5b18404e8fce",
    "id": null,
    "metadata": {},
    "name": "ParentSelectorModalOptionsQuery",
    "operationKind": "query",
    "text": "query ParentSelectorModalOptionsQuery {\n  viewer {\n    collections {\n      edges {\n        node {\n          id\n          title\n        }\n      }\n    }\n    id\n  }\n  communities {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '109bf70ef8def70c0feae14deea79a2c';
export default node;
