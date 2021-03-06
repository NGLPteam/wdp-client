/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type NodeRoleSelectQueryVariables = {
    id: string;
};
export type NodeRoleSelectQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"RoleSelectFragment">;
    } | null;
};
export type NodeRoleSelectQuery = {
    readonly response: NodeRoleSelectQueryResponse;
    readonly variables: NodeRoleSelectQueryVariables;
};



/*
query NodeRoleSelectQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...RoleSelectFragment
    id
  }
}

fragment RoleSelectFragment on Entity {
  __isEntity: __typename
  assignableRoles {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NodeRoleSelectQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RoleSelectFragment"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NodeRoleSelectQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
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
          (v2/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7e99bcf7a0c4764c2f646eb9e95f8643",
    "id": null,
    "metadata": {},
    "name": "NodeRoleSelectQuery",
    "operationKind": "query",
    "text": "query NodeRoleSelectQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...RoleSelectFragment\n    id\n  }\n}\n\nfragment RoleSelectFragment on Entity {\n  __isEntity: __typename\n  assignableRoles {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '4aac81f1ac08c01dbde0239fd9a113e4';
export default node;
