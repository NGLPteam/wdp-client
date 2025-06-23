/**
 * @generated SignedSource<<4de709fd57b258fa65d76545eb62b147>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestSourceDestroyInput = {
  clientMutationId?: string | null | undefined;
  harvestSourceId: string;
};
export type useDestroyerDestroyHarvestSourceMutation$variables = {
  input: HarvestSourceDestroyInput;
};
export type useDestroyerDestroyHarvestSourceMutation$data = {
  readonly harvestSourceDestroy: {
    readonly destroyedId: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"useDestroyerFragment">;
  } | null | undefined;
};
export type useDestroyerDestroyHarvestSourceMutation = {
  response: useDestroyerDestroyHarvestSourceMutation$data;
  variables: useDestroyerDestroyHarvestSourceMutation$variables;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "destroyedId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "destroyed",
  "storageKey": null
},
v4 = {
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
},
v5 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "revoked",
      "storageKey": null
    },
    (v4/*: any*/)
  ],
  "type": "RevokeAccessPayload",
  "abstractKey": null
},
v6 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "disabled",
      "storageKey": null
    },
    (v4/*: any*/)
  ],
  "type": "DestroyOrderingPayload",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useDestroyerDestroyHarvestSourceMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSourceDestroyPayload",
        "kind": "LinkedField",
        "name": "harvestSourceDestroy",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineDataFragmentSpread",
            "name": "useDestroyerFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "type": "DestroyMutationPayload",
                    "abstractKey": "__isDestroyMutationPayload"
                  },
                  (v5/*: any*/),
                  (v6/*: any*/)
                ],
                "type": "StandardMutationPayload",
                "abstractKey": "__isStandardMutationPayload"
              }
            ],
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
    "name": "useDestroyerDestroyHarvestSourceMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "HarvestSourceDestroyPayload",
        "kind": "LinkedField",
        "name": "harvestSourceDestroy",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteRecord",
            "key": "",
            "kind": "ScalarHandle",
            "name": "destroyedId"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "type": "DestroyMutationPayload",
                "abstractKey": "__isDestroyMutationPayload"
              },
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "type": "StandardMutationPayload",
            "abstractKey": "__isStandardMutationPayload"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b067485bf68d707c4484dac61c3b27a7",
    "id": null,
    "metadata": {},
    "name": "useDestroyerDestroyHarvestSourceMutation",
    "operationKind": "mutation",
    "text": "mutation useDestroyerDestroyHarvestSourceMutation(\n  $input: HarvestSourceDestroyInput!\n) {\n  harvestSourceDestroy(input: $input) {\n    destroyedId\n    ...useDestroyerFragment\n  }\n}\n\nfragment useDestroyerFragment on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  ... on DestroyMutationPayload {\n    __isDestroyMutationPayload: __typename\n    destroyedId\n    destroyed\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on RevokeAccessPayload {\n    revoked\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on DestroyOrderingPayload {\n    disabled\n    globalErrors {\n      message\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "af1cd9e2c064a0775b0a4471ecf0a446";

export default node;
