/**
 * @generated SignedSource<<1c2511d1bf7e404debe00b9e42e3b665>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PropertyApplicationStrategy = "APPLY" | "SKIP" | "%future added value";
export type AlterSchemaVersionInput = {
  clientMutationId?: string | null | undefined;
  entityId: string;
  propertyValues: any;
  schemaVersionSlug: string;
  strategy?: PropertyApplicationStrategy | null | undefined;
};
export type SchemaSelectorModalMutation$variables = {
  input: AlterSchemaVersionInput;
};
export type SchemaSelectorModalMutation$data = {
  readonly alterSchemaVersion: {
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null | undefined;
};
export type SchemaSelectorModalMutation = {
  response: SchemaSelectorModalMutation$data;
  variables: SchemaSelectorModalMutation$variables;
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
    "name": "SchemaSelectorModalMutation",
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
            "selections": (v3/*: any*/),
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
    "name": "SchemaSelectorModalMutation",
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
    "cacheID": "df9382f9421d4905a7efd921d869777e",
    "id": null,
    "metadata": {},
    "name": "SchemaSelectorModalMutation",
    "operationKind": "mutation",
    "text": "mutation SchemaSelectorModalMutation(\n  $input: AlterSchemaVersionInput!\n) {\n  alterSchemaVersion(input: $input) {\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "a88eeaf9617dc75e9fac83cab2badf3c";

export default node;
