/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommunityAddMemberDrawerQueryVariables = {
    slug: string;
};
export type CommunityAddMemberDrawerQueryResponse = {
    readonly community: {
        readonly id: string;
        readonly title: string;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"RoleGrantAccessFormFragment">;
};
export type CommunityAddMemberDrawerQuery = {
    readonly response: CommunityAddMemberDrawerQueryResponse;
    readonly variables: CommunityAddMemberDrawerQueryVariables;
};



/*
query CommunityAddMemberDrawerQuery(
  $slug: Slug!
) {
  community(slug: $slug) {
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

fragment UserTypeaheadFragment on Query {
  users {
    edges {
      node {
        id
        name
      }
    }
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
  "concreteType": "Community",
  "kind": "LinkedField",
  "name": "community",
  "plural": false,
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
},
v3 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommunityAddMemberDrawerQuery",
    "selections": [
      (v2/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommunityAddMemberDrawerQuery",
    "selections": [
      (v2/*: any*/),
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
                "selections": (v3/*: any*/),
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
                "selections": (v3/*: any*/),
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
    "cacheID": "b8262d8a8da9835a3f3be3125342bdb0",
    "id": null,
    "metadata": {},
    "name": "CommunityAddMemberDrawerQuery",
    "operationKind": "query",
    "text": "query CommunityAddMemberDrawerQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    id\n    title\n  }\n  ...RoleGrantAccessFormFragment\n}\n\nfragment RoleGrantAccessFormFragment on Query {\n  ...UserTypeaheadFragment\n  ...RoleSelectFragment\n}\n\nfragment RoleSelectFragment on Query {\n  roles {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment UserTypeaheadFragment on Query {\n  users {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a6febc51cb095100ba27260e7edb3f8e';
export default node;
