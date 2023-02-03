/**
 * @generated SignedSource<<43641537161fcc553e49587e0a2233b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ApplySchemaPropertiesInput = {
  clientMutationId?: string | null;
  entityId: string;
  propertyValues: any;
};
export type SchemaInstanceProviderApplyMutation$variables = {
  input: ApplySchemaPropertiesInput;
};
export type SchemaInstanceProviderApplyMutation$data = {
  readonly applySchemaProperties: {
    readonly entity: {
      readonly id?: string;
    } | null;
    readonly schemaErrors: ReadonlyArray<{
      readonly hint: boolean;
      readonly message: string;
      readonly metadata: any | null;
      readonly path: string;
    }>;
  } | null;
};
export type SchemaInstanceProviderApplyMutation = {
  response: SchemaInstanceProviderApplyMutation$data;
  variables: SchemaInstanceProviderApplyMutation$variables;
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
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaValueError",
  "kind": "LinkedField",
  "name": "schemaErrors",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hint",
      "storageKey": null
    },
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
      "name": "metadata",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "path",
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
    "name": "SchemaInstanceProviderApplyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ApplySchemaPropertiesPayload",
        "kind": "LinkedField",
        "name": "applySchemaProperties",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "entity",
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
    "name": "SchemaInstanceProviderApplyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ApplySchemaPropertiesPayload",
        "kind": "LinkedField",
        "name": "applySchemaProperties",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "entity",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/)
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
    "cacheID": "9040af6599f68ba2c6b3cf5da19def5d",
    "id": null,
    "metadata": {},
    "name": "SchemaInstanceProviderApplyMutation",
    "operationKind": "mutation",
    "text": "mutation SchemaInstanceProviderApplyMutation(\n  $input: ApplySchemaPropertiesInput!\n) {\n  applySchemaProperties(input: $input) {\n    entity {\n      __typename\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    schemaErrors {\n      hint\n      message\n      metadata\n      path\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ea5c51241af6b9a67eea621e8b528fd0";

export default node;
