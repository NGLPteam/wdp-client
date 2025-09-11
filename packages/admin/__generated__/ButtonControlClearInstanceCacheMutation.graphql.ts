/**
 * @generated SignedSource<<a7f4b46619a4cd75f2b082d80c9982de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FrontendCacheRevalidateInstanceInput = {
  clientMutationId?: string | null | undefined;
};
export type ButtonControlClearInstanceCacheMutation$variables = {
  input: FrontendCacheRevalidateInstanceInput;
};
export type ButtonControlClearInstanceCacheMutation$data = {
  readonly frontendCacheRevalidateInstance: {
    readonly globalErrors: ReadonlyArray<{
      readonly message: string;
      readonly type: string;
    }>;
    readonly revalidated: boolean | null | undefined;
  } | null | undefined;
};
export type ButtonControlClearInstanceCacheMutation = {
  response: ButtonControlClearInstanceCacheMutation$data;
  variables: ButtonControlClearInstanceCacheMutation$variables;
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
    "concreteType": "FrontendCacheRevalidateInstancePayload",
    "kind": "LinkedField",
    "name": "frontendCacheRevalidateInstance",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "revalidated",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
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
    "name": "ButtonControlClearInstanceCacheMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ButtonControlClearInstanceCacheMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a56c0c4f4b76907ff47e5fc72442532b",
    "id": null,
    "metadata": {},
    "name": "ButtonControlClearInstanceCacheMutation",
    "operationKind": "mutation",
    "text": "mutation ButtonControlClearInstanceCacheMutation(\n  $input: FrontendCacheRevalidateInstanceInput!\n) {\n  frontendCacheRevalidateInstance(input: $input) {\n    revalidated\n    globalErrors {\n      message\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2028eacb5e6a57335b7daeb31d3475be";

export default node;
