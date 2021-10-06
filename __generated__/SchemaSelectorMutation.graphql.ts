/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AlterSchemaVersionInput = {
    entityId: string;
    schemaVersionSlug: string;
    propertyValues: unknown;
    clientMutationId?: string | null;
};
export type SchemaSelectorMutationVariables = {
    input: AlterSchemaVersionInput;
};
export type SchemaSelectorMutationResponse = {
    readonly alterSchemaVersion: {
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
    } | null;
};
export type SchemaSelectorMutation = {
    readonly response: SchemaSelectorMutationResponse;
    readonly variables: SchemaSelectorMutationVariables;
};



/*
mutation SchemaSelectorMutation(
  $input: AlterSchemaVersionInput!
) {
  alterSchemaVersion(input: $input) {
    ...MutationForm_mutationErrors
  }
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
v3 = [
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SchemaSelectorMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AlterSchemaVersionPayload",
        "kind": "LinkedField",
        "name": "alterSchemaVersion",
        "plural": false,
        "selections": [
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": (v3/*: any*/)
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
    "name": "SchemaSelectorMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AlterSchemaVersionPayload",
        "kind": "LinkedField",
        "name": "alterSchemaVersion",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fe9b3bd696295f3319c13b72c2719e30",
    "id": null,
    "metadata": {},
    "name": "SchemaSelectorMutation",
    "operationKind": "mutation",
    "text": "mutation SchemaSelectorMutation(\n  $input: AlterSchemaVersionInput!\n) {\n  alterSchemaVersion(input: $input) {\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = '8ca35385d552c564257e3db3c33ccae7';
export default node;
