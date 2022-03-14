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
        readonly " $fragmentRefs": FragmentRefs<"RoleGrantAccessFormRolesFragment">;
    } | null | undefined;
    readonly collection?: {
        readonly id: string;
        readonly title: string;
        readonly " $fragmentRefs": FragmentRefs<"RoleGrantAccessFormRolesFragment">;
    } | null | undefined;
    readonly item?: {
        readonly id: string;
        readonly title: string;
        readonly " $fragmentRefs": FragmentRefs<"RoleGrantAccessFormRolesFragment">;
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
    ...RoleGrantAccessFormRolesFragment
  }
  collection(slug: $slug) @include(if: $onCollection) {
    id
    title
    ...RoleGrantAccessFormRolesFragment
  }
  item(slug: $slug) @include(if: $onItem) {
    id
    title
    ...RoleGrantAccessFormRolesFragment
  }
  ...RoleGrantAccessFormFragment
}

fragment AvatarFragment on ImageAttachment {
  storage
  small {
    webp {
      ...ImageFragment
    }
  }
}

fragment ImageFragment on Image {
  __isImage: __typename
  alt
  url
  width
  height
}

fragment RoleGrantAccessFormFragment on Query {
  ...UserTypeaheadFragment
}

fragment RoleGrantAccessFormRolesFragment on Entity {
  __isEntity: __typename
  ...RoleSelectFragment
}

fragment RoleSelectFragment on Entity {
  __isEntity: __typename
  assignableRoles {
    id
    name
  }
}

fragment UserAvatarFragment on User {
  avatar {
    ...AvatarFragment
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
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v7 = [
  (v5/*: any*/),
  (v6/*: any*/),
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "RoleGrantAccessFormRolesFragment"
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = [
  (v5/*: any*/),
  (v6/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Role",
        "kind": "LinkedField",
        "name": "assignableRoles",
        "plural": true,
        "selections": [
          (v5/*: any*/),
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Entity",
    "abstractKey": "__isEntity"
  }
];
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
      {
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
            "selections": (v7/*: any*/),
            "storageKey": null
          }
        ]
      },
      {
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
            "selections": (v7/*: any*/),
            "storageKey": null
          }
        ]
      },
      {
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
            "selections": (v7/*: any*/),
            "storageKey": null
          }
        ]
      },
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
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ImageAttachment",
                    "kind": "LinkedField",
                    "name": "avatar",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "storage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ImageSize",
                        "kind": "LinkedField",
                        "name": "small",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ImageDerivative",
                            "kind": "LinkedField",
                            "name": "webp",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "alt",
                                    "storageKey": null
                                  },
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
                                    "name": "width",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "height",
                                    "storageKey": null
                                  }
                                ],
                                "type": "Image",
                                "abstractKey": "__isImage"
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
            "selections": (v9/*: any*/),
            "storageKey": null
          }
        ]
      },
      {
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
            "selections": (v9/*: any*/),
            "storageKey": null
          }
        ]
      },
      {
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
            "selections": (v9/*: any*/),
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "965ba290f88a4ba134976691bc82bc19",
    "id": null,
    "metadata": {},
    "name": "RoleGrantAccessDrawerQuery",
    "operationKind": "query",
    "text": "query RoleGrantAccessDrawerQuery(\n  $slug: Slug!\n  $onCommunity: Boolean!\n  $onCollection: Boolean!\n  $onItem: Boolean!\n) {\n  community(slug: $slug) @include(if: $onCommunity) {\n    id\n    title\n    ...RoleGrantAccessFormRolesFragment\n  }\n  collection(slug: $slug) @include(if: $onCollection) {\n    id\n    title\n    ...RoleGrantAccessFormRolesFragment\n  }\n  item(slug: $slug) @include(if: $onItem) {\n    id\n    title\n    ...RoleGrantAccessFormRolesFragment\n  }\n  ...RoleGrantAccessFormFragment\n}\n\nfragment AvatarFragment on ImageAttachment {\n  storage\n  small {\n    webp {\n      ...ImageFragment\n    }\n  }\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment RoleGrantAccessFormFragment on Query {\n  ...UserTypeaheadFragment\n}\n\nfragment RoleGrantAccessFormRolesFragment on Entity {\n  __isEntity: __typename\n  ...RoleSelectFragment\n}\n\nfragment RoleSelectFragment on Entity {\n  __isEntity: __typename\n  assignableRoles {\n    id\n    name\n  }\n}\n\nfragment UserAvatarFragment on User {\n  avatar {\n    ...AvatarFragment\n  }\n}\n\nfragment UserTypeaheadFragment on Query {\n  users {\n    edges {\n      node {\n        id\n        name\n        ...UserAvatarFragment\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2d629c5eac017086765be4a7c595f51a';
export default node;
