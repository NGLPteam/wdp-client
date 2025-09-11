/**
 * @generated SignedSource<<a905a43506adc046de2e2fba80e71ed1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FrontendCacheRevalidateEntityInput = {
  clientMutationId?: string | null | undefined;
  entityId: string;
};
export type ButtonControlClearEntityCacheMutation$variables = {
  input: FrontendCacheRevalidateEntityInput;
};
export type ButtonControlClearEntityCacheMutation$data = {
  readonly frontendCacheRevalidateEntity: {
    readonly attributeErrors: ReadonlyArray<{
      readonly messages: ReadonlyArray<string>;
      readonly path: string;
      readonly type: string;
    }>;
    readonly globalErrors: ReadonlyArray<{
      readonly message: string;
      readonly type: string;
    }>;
    readonly revalidated: boolean | null | undefined;
  } | null | undefined;
};
export type ButtonControlClearEntityCacheMutation = {
  response: ButtonControlClearEntityCacheMutation$data;
  variables: ButtonControlClearEntityCacheMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "FrontendCacheRevalidateEntityPayload",
    "kind": "LinkedField",
    "name": "frontendCacheRevalidateEntity",
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
          (v1/*: any*/)
        ],
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
            "name": "messages",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "path",
            "storageKey": null
          },
          (v1/*: any*/)
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
    "name": "ButtonControlClearEntityCacheMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ButtonControlClearEntityCacheMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "2b9333d87c7f285e74bdd4f472e2677b",
    "id": null,
    "metadata": {},
    "name": "ButtonControlClearEntityCacheMutation",
    "operationKind": "mutation",
    "text": "mutation ButtonControlClearEntityCacheMutation(\n  $input: FrontendCacheRevalidateEntityInput!\n) {\n  frontendCacheRevalidateEntity(input: $input) {\n    revalidated\n    globalErrors {\n      message\n      type\n    }\n    attributeErrors {\n      messages\n      path\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "02cb7b878d38c4a7a1c0b966d45c24fd";

export default node;
