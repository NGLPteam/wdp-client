/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserGrantItemAccessDrawerQueryVariables = {
    slug: string;
};
export type UserGrantItemAccessDrawerQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly name: string | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"UserGrantItemAccessFormFragment">;
};
export type UserGrantItemAccessDrawerQuery = {
    readonly response: UserGrantItemAccessDrawerQueryResponse;
    readonly variables: UserGrantItemAccessDrawerQueryVariables;
};



/*
query UserGrantItemAccessDrawerQuery(
  $slug: Slug!
) {
  user(slug: $slug) {
    id
    name
  }
  ...UserGrantItemAccessFormFragment
}

fragment ItemTypeaheadFragment on Query {
  viewer {
    items {
      nodes {
        id
        title
      }
    }
    id
  }
}

fragment UserGrantItemAccessFormFragment on Query {
  ...ItemTypeaheadFragment
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "slug",
      "variableName": "slug"
    }
  ],
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserGrantItemAccessDrawerQuery",
    "selections": [
      (v2/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UserGrantItemAccessFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserGrantItemAccessDrawerQuery",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemConnection",
            "kind": "LinkedField",
            "name": "items",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Item",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "96f404f9a5d480c8cda1ea869c7177ec",
    "id": null,
    "metadata": {},
    "name": "UserGrantItemAccessDrawerQuery",
    "operationKind": "query",
    "text": "query UserGrantItemAccessDrawerQuery(\n  $slug: Slug!\n) {\n  user(slug: $slug) {\n    id\n    name\n  }\n  ...UserGrantItemAccessFormFragment\n}\n\nfragment ItemTypeaheadFragment on Query {\n  viewer {\n    items {\n      nodes {\n        id\n        title\n      }\n    }\n    id\n  }\n}\n\nfragment UserGrantItemAccessFormFragment on Query {\n  ...ItemTypeaheadFragment\n}\n"
  }
};
})();
(node as any).hash = '4c08fcb50a0ef3138f49eb6ee3a2823e';
export default node;
