/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateCollectionInput = {
    parentId: string;
    title: string;
    identifier: string;
    clientMutationId?: string | null;
};
export type NewCollectionFormCreateMutationVariables = {
    input: CreateCollectionInput;
};
export type NewCollectionFormCreateMutationResponse = {
    readonly createCollection: {
        readonly collection: {
            readonly title: string | null;
        } | null;
        readonly errors: ReadonlyArray<{
            readonly message: string;
        }>;
    } | null;
};
export type NewCollectionFormCreateMutation = {
    readonly response: NewCollectionFormCreateMutationResponse;
    readonly variables: NewCollectionFormCreateMutationVariables;
};



/*
mutation NewCollectionFormCreateMutation(
  $input: CreateCollectionInput!
) {
  createCollection(input: $input) {
    collection {
      title
      id
    }
    errors {
      message
    }
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "UserError",
  "kind": "LinkedField",
  "name": "errors",
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NewCollectionFormCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCollectionPayload",
        "kind": "LinkedField",
        "name": "createCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
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
    "name": "NewCollectionFormCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCollectionPayload",
        "kind": "LinkedField",
        "name": "createCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Collection",
            "kind": "LinkedField",
            "name": "collection",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
    "cacheID": "67689f7e95503f2334a613bc4e61f062",
    "id": null,
    "metadata": {},
    "name": "NewCollectionFormCreateMutation",
    "operationKind": "mutation",
    "text": "mutation NewCollectionFormCreateMutation(\n  $input: CreateCollectionInput!\n) {\n  createCollection(input: $input) {\n    collection {\n      title\n      id\n    }\n    errors {\n      message\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '19511af8fc2a05bf647cd0358d7bb453';
export default node;
