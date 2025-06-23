/**
 * @generated SignedSource<<4843847b9aa82975fd55400a31f29ef2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DestroyAnnouncementInput = {
  announcementId: string;
  clientMutationId?: string | null | undefined;
};
export type useDestroyerDestroyAnnouncementMutation$variables = {
  input: DestroyAnnouncementInput;
};
export type useDestroyerDestroyAnnouncementMutation$data = {
  readonly destroyAnnouncement: {
    readonly destroyedId: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"useDestroyerFragment">;
  } | null | undefined;
};
export type useDestroyerDestroyAnnouncementMutation = {
  response: useDestroyerDestroyAnnouncementMutation$data;
  variables: useDestroyerDestroyAnnouncementMutation$variables;
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
    "name": "useDestroyerDestroyAnnouncementMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyAnnouncementPayload",
        "kind": "LinkedField",
        "name": "destroyAnnouncement",
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
    "name": "useDestroyerDestroyAnnouncementMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyAnnouncementPayload",
        "kind": "LinkedField",
        "name": "destroyAnnouncement",
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
    "cacheID": "f48861dbbc9d6e9722470745f04a153d",
    "id": null,
    "metadata": {},
    "name": "useDestroyerDestroyAnnouncementMutation",
    "operationKind": "mutation",
    "text": "mutation useDestroyerDestroyAnnouncementMutation(\n  $input: DestroyAnnouncementInput!\n) {\n  destroyAnnouncement(input: $input) {\n    destroyedId\n    ...useDestroyerFragment\n  }\n}\n\nfragment useDestroyerFragment on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  ... on DestroyMutationPayload {\n    __isDestroyMutationPayload: __typename\n    destroyedId\n    destroyed\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on RevokeAccessPayload {\n    revoked\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on DestroyOrderingPayload {\n    disabled\n    globalErrors {\n      message\n      type\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8819ada88581935011411fe0ccc3e848";

export default node;
