/**
 * @generated SignedSource<<255c5dcbfc09de215f6e7477dc727c61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReparentEntityInput = {
  childId: string;
  clientMutationId?: string | null | undefined;
  parentId: string;
};
export type ParentSelectorModalMutation$variables = {
  input: ReparentEntityInput;
};
export type ParentSelectorModalMutation$data = {
  readonly reparentEntity: {
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null | undefined;
};
export type ParentSelectorModalMutation = {
  response: ParentSelectorModalMutation$data;
  variables: ParentSelectorModalMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = [
  {
    "kind": "InlineFragment",
    "selections": [
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
    "type": "StandardMutationPayload",
    "abstractKey": "__isStandardMutationPayload"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ParentSelectorModalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ReparentEntityPayload",
        "kind": "LinkedField",
        "name": "reparentEntity",
        "plural": false,
        "selections": [
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": (v2/*: any*/),
            "args": null,
            "argumentDefinitions": []
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ParentSelectorModalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ReparentEntityPayload",
        "kind": "LinkedField",
        "name": "reparentEntity",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7e427b7a449fb417e7b6f010277048b6",
    "id": null,
    "metadata": {},
    "name": "ParentSelectorModalMutation",
    "operationKind": "mutation",
    "text": "mutation ParentSelectorModalMutation(\n  $input: ReparentEntityInput!\n) {\n  reparentEntity(input: $input) {\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "259008e66635366cf3f07bb80a846271";

export default node;
