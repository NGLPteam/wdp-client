/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type SlugToIDCommunityQueryVariables = {
    slug: string;
};
export type SlugToIDCommunityQueryResponse = {
    readonly community: {
        readonly id: string;
    } | null;
};
export type SlugToIDCommunityQuery = {
    readonly response: SlugToIDCommunityQueryResponse;
    readonly variables: SlugToIDCommunityQueryVariables;
};



/*
query SlugToIDCommunityQuery(
  $slug: Slug!
) {
  community(slug: $slug) {
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "slug",
        "variableName": "slug"
      }
    ],
    "concreteType": "Community",
    "kind": "LinkedField",
    "name": "community",
    "plural": false,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugToIDCommunityQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SlugToIDCommunityQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "edddfbcbfbb9c5815f59e83987a36e83",
    "id": null,
    "metadata": {},
    "name": "SlugToIDCommunityQuery",
    "operationKind": "query",
    "text": "query SlugToIDCommunityQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '37a1fe4fa3e7384878e17a3b9fb3f35d';
export default node;
