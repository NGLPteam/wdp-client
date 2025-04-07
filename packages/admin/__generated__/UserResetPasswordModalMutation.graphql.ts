/**
 * @generated SignedSource<<692caa82eb29a82c5d253e421ddb5eb0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ClientLocation = "ADMIN" | "FRONTEND" | "%future added value";
export type UserResetPasswordInput = {
  clientId: string;
  clientMutationId?: string | null | undefined;
  location: ClientLocation;
  redirectPath: string;
  userId?: string | null | undefined;
};
export type UserResetPasswordModalMutation$variables = {
  input: UserResetPasswordInput;
};
export type UserResetPasswordModalMutation$data = {
  readonly userResetPassword: {
    readonly attributeErrors: ReadonlyArray<{
      readonly messages: ReadonlyArray<string>;
      readonly path: string;
      readonly type: string;
    }>;
    readonly globalErrors: ReadonlyArray<{
      readonly message: string;
    }>;
    readonly success: boolean | null | undefined;
  } | null | undefined;
};
export type UserResetPasswordModalMutation = {
  response: UserResetPasswordModalMutation$data;
  variables: UserResetPasswordModalMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserResetPasswordPayload",
    "kind": "LinkedField",
    "name": "userResetPassword",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MutationAttributeError",
        "kind": "LinkedField",
        "name": "attributeErrors",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "path",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "messages",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MutationGlobalError",
        "kind": "LinkedField",
        "name": "globalErrors",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "message",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserResetPasswordModalMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserResetPasswordModalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6d87767f7682e821c43df357cc5928f5",
    "id": null,
    "metadata": {},
    "name": "UserResetPasswordModalMutation",
    "operationKind": "mutation",
    "text": "mutation UserResetPasswordModalMutation(\n  $input: UserResetPasswordInput!\n) {\n  userResetPassword(input: $input) {\n    success\n    attributeErrors {\n      path\n      type\n      messages\n    }\n    globalErrors {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cfa699100e9d4b6a400ceba5ff478ac7";

export default node;
