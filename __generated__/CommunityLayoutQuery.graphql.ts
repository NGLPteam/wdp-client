/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CommunityLayoutQueryVariables = {
    slug: string;
};
export type CommunityLayoutQueryResponse = {
    readonly community: {
        readonly name: string;
        readonly slug: string;
    } | null;
};
export type CommunityLayoutQuery = {
    readonly response: CommunityLayoutQueryResponse;
    readonly variables: CommunityLayoutQueryVariables;
};



/*
query CommunityLayoutQuery(
  $slug: Slug!
) {
  community(slug: $slug) {
    name
    slug
    id
  }
}
*/

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
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommunityLayoutQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
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
    "name": "CommunityLayoutQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "1175edb008d0a508e86c6f7d487aadbe",
    "id": null,
    "metadata": {},
    "name": "CommunityLayoutQuery",
    "operationKind": "query",
    "text": "query CommunityLayoutQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    name\n    slug\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e82649f2e3538d10ec8dc44b5125ed7d';
export default node;
