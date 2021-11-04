/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RoleGrantAccessDrawerQueryVariables = {
    slug: string;
    onCommunity: boolean;
    onCollection: boolean;
    onItem: boolean;
};
export type RoleGrantAccessDrawerQueryResponse = {
    readonly community?: {
        readonly id: string;
        readonly title: string;
    } | null | undefined;
    readonly collection?: {
        readonly id: string;
        readonly title: string;
    } | null | undefined;
    readonly item?: {
        readonly id: string;
        readonly title: string;
    } | null | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RoleGrantAccessFormFragment">;
};
export type RoleGrantAccessDrawerQuery = {
    readonly response: RoleGrantAccessDrawerQueryResponse;
    readonly variables: RoleGrantAccessDrawerQueryVariables;
};



/*
query RoleGrantAccessDrawerQuery(
  $slug: Slug!
  $onCommunity: Boolean!
  $onCollection: Boolean!
  $onItem: Boolean!
) {
  community(slug: $slug) @include(if: $onCommunity) {
    id
    title
  }
  collection(slug: $slug) @include(if: $onCollection) {
    id
    title
  }
  item(slug: $slug) @include(if: $onItem) {
    id
    title
  }
  ...RoleGrantAccessFormFragment
}

fragment RoleGrantAccessFormFragment on Query {
  ...UserTypeaheadFragment
  ...RoleSelectFragment
}

fragment RoleSelectFragment on Query {
  roles {
    edges {
      node {
        id
        name
      }
    }
  }
}

fragment UserAvatarFragment on User {
  avatar {
    small {
      png {
        url
        alt
      }
    }
  }
}

fragment UserTypeaheadFragment on Query {
  users {
    edges {
      node {
        id
        name
        ...UserAvatarFragment
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "onCollection"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "onCommunity"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "onItem"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v4 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  (v5/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  }
],
v7 = {
  "condition": "onCommunity",
  "kind": "Condition",
  "passingValue": true,
  "selections": [
    {
      "alias": null,
      "args": (v4/*: any*/),
      "concreteType": "Community",
      "kind": "LinkedField",
      "name": "community",
      "plural": false,
      "selections": (v6/*: any*/),
      "storageKey": null
    }
  ]
},
v8 = {
  "condition": "onCollection",
  "kind": "Condition",
  "passingValue": true,
  "selections": [
    {
      "alias": null,
      "args": (v4/*: any*/),
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": (v6/*: any*/),
      "storageKey": null
    }
  ]
},
v9 = {
  "condition": "onItem",
  "kind": "Condition",
  "passingValue": true,
  "selections": [
    {
      "alias": null,
      "args": (v4/*: any*/),
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "item",
      "plural": false,
      "selections": (v6/*: any*/),
      "storageKey": null
    }
  ]
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RoleGrantAccessDrawerQuery",
    "selections": [
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RoleGrantAccessFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "RoleGrantAccessDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserConnection",
        "kind": "LinkedField",
        "name": "users",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetPreview",
                    "kind": "LinkedField",
                    "name": "avatar",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PreviewImageMap",
                        "kind": "LinkedField",
                        "name": "small",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PreviewImage",
                            "kind": "LinkedField",
                            "name": "png",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "url",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "alt",
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
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "RoleConnection",
        "kind": "LinkedField",
        "name": "roles",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RoleEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Role",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v10/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/)
    ]
  },
  "params": {
    "cacheID": "e9a7dde4b8ccefd10db2b2943db4942b",
    "id": null,
    "metadata": {},
    "name": "RoleGrantAccessDrawerQuery",
    "operationKind": "query",
    "text": "query RoleGrantAccessDrawerQuery(\n  $slug: Slug!\n  $onCommunity: Boolean!\n  $onCollection: Boolean!\n  $onItem: Boolean!\n) {\n  community(slug: $slug) @include(if: $onCommunity) {\n    id\n    title\n  }\n  collection(slug: $slug) @include(if: $onCollection) {\n    id\n    title\n  }\n  item(slug: $slug) @include(if: $onItem) {\n    id\n    title\n  }\n  ...RoleGrantAccessFormFragment\n}\n\nfragment RoleGrantAccessFormFragment on Query {\n  ...UserTypeaheadFragment\n  ...RoleSelectFragment\n}\n\nfragment RoleSelectFragment on Query {\n  roles {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment UserAvatarFragment on User {\n  avatar {\n    small {\n      png {\n        url\n        alt\n      }\n    }\n  }\n}\n\nfragment UserTypeaheadFragment on Query {\n  users {\n    edges {\n      node {\n        id\n        name\n        ...UserAvatarFragment\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fa32c4be5f5b8b7c0b0dcaa9fc6ad566';
export default node;
