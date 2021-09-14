/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UploadStorage = "CACHE" | "%future added value";
export type UpdateCommunityInput = {
    communityId: string;
    position?: number | null;
    title: string;
    thumbnail?: UploadedFileInput | null;
    clearThumbnail?: boolean | null;
    clientMutationId?: string | null;
};
export type UploadedFileInput = {
    id: unknown;
    storage?: UploadStorage | null;
    metadata?: UploadedFileMetadataInput | null;
};
export type UploadedFileMetadataInput = {
    filename?: string | null;
    mimeType?: string | null;
};
export type CommunityUpdateFormMutationVariables = {
    input: UpdateCommunityInput;
};
export type CommunityUpdateFormMutationResponse = {
    readonly updateCommunity: {
        readonly community: {
            readonly " $fragmentRefs": FragmentRefs<"CommunityUpdateFormFieldsFragment">;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
    } | null;
};
export type CommunityUpdateFormMutation = {
    readonly response: CommunityUpdateFormMutationResponse;
    readonly variables: CommunityUpdateFormMutationVariables;
};



/*
mutation CommunityUpdateFormMutation(
  $input: UpdateCommunityInput!
) {
  updateCommunity(input: $input) {
    community {
      ...CommunityUpdateFormFieldsFragment
      id
    }
    ...MutationForm_mutationErrors
  }
}

fragment CommunityUpdateFormFieldsFragment on Community {
  title
}

fragment MutationForm_mutationErrors on StandardMutationPayload {
  __isStandardMutationPayload: __typename
  attributeErrors {
    path
    type
    messages
  }
  globalErrors {
    message
  }
  errors {
    message
  }
}
*/

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
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v3 = {
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
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v2/*: any*/),
      "storageKey": null
    }
  ],
  "type": "StandardMutationPayload",
  "abstractKey": "__isStandardMutationPayload"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommunityUpdateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCommunityPayload",
        "kind": "LinkedField",
        "name": "updateCommunity",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CommunityUpdateFormFieldsFragment"
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v3/*: any*/)
            ]
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
    "name": "CommunityUpdateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCommunityPayload",
        "kind": "LinkedField",
        "name": "updateCommunity",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Community",
            "kind": "LinkedField",
            "name": "community",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "051b1b9a955b30317c279dee99c37132",
    "id": null,
    "metadata": {},
    "name": "CommunityUpdateFormMutation",
    "operationKind": "mutation",
    "text": "mutation CommunityUpdateFormMutation(\n  $input: UpdateCommunityInput!\n) {\n  updateCommunity(input: $input) {\n    community {\n      ...CommunityUpdateFormFieldsFragment\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment CommunityUpdateFormFieldsFragment on Community {\n  title\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e1e8705c21ef3b1bbf6f976480629d40';
export default node;
