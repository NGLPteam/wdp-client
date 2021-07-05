/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CommunityDetailQueryVariables = {
    slug: unknown;
};
export type CommunityDetailQueryResponse = {
    readonly community: {
        readonly name: string;
        readonly slug: unknown;
    } | null;
};
export type CommunityDetailQuery = {
    readonly response: CommunityDetailQueryResponse;
    readonly variables: CommunityDetailQueryVariables;
};



/*
query CommunityDetailQuery(
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
    "name": "CommunityDetailQuery",
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
    "name": "CommunityDetailQuery",
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
    "cacheID": "b5d450603ca1477ea045ca2d610a9a99",
    "id": null,
    "metadata": {},
    "name": "CommunityDetailQuery",
    "operationKind": "query",
    "text": "query CommunityDetailQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    name\n    slug\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd0b614b25b4e0db06624141ba9e8593e';
export default node;
