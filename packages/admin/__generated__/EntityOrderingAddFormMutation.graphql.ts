/**
 * @generated SignedSource<<1603f29b6f75a580e277375ffe46be1c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Direction = "ASCENDING" | "DESCENDING" | "%future added value";
export type NullOrderPriority = "FIRST" | "LAST" | "%future added value";
export type OrderingDirectSelection = "CHILDREN" | "DESCENDANTS" | "NONE" | "%future added value";
export type OrderingRenderMode = "FLAT" | "TREE" | "%future added value";
export type CreateOrderingInput = {
  clientMutationId?: string | null;
  entityId: string;
  filter?: OrderingFilterDefinitionInput | null;
  footer?: string | null;
  header?: string | null;
  identifier: string;
  name?: string | null;
  order: ReadonlyArray<OrderDefinitionInput>;
  render?: OrderingRenderDefinitionInput | null;
  select?: OrderingSelectDefinitionInput | null;
};
export type OrderingFilterDefinitionInput = {
  schemas?: ReadonlyArray<OrderingSchemaFilterInput> | null;
};
export type OrderingSchemaFilterInput = {
  identifier: string;
  namespace: string;
  version?: any | null;
};
export type OrderingSelectDefinitionInput = {
  direct?: OrderingDirectSelection | null;
  links?: OrderingSelectLinkDefinitionInput | null;
};
export type OrderingSelectLinkDefinitionInput = {
  contains?: boolean | null;
  references?: boolean | null;
};
export type OrderDefinitionInput = {
  direction?: Direction | null;
  nulls?: NullOrderPriority | null;
  path: string;
};
export type OrderingRenderDefinitionInput = {
  mode?: OrderingRenderMode | null;
};
export type EntityOrderingAddFormMutation$variables = {
  input: CreateOrderingInput;
};
export type EntityOrderingAddFormMutation$data = {
  readonly createOrdering: {
    readonly ordering: {
      readonly name: string | null;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null;
};
export type EntityOrderingAddFormMutation = {
  response: EntityOrderingAddFormMutation$data;
  variables: EntityOrderingAddFormMutation$variables;
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
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v4 = {
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
      "selections": (v3/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v3/*: any*/),
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
    "name": "EntityOrderingAddFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateOrderingPayload",
        "kind": "LinkedField",
        "name": "createOrdering",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "ordering",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v4/*: any*/)
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
    "name": "EntityOrderingAddFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateOrderingPayload",
        "kind": "LinkedField",
        "name": "createOrdering",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "ordering",
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
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c8ea7dca965797a0b68180c0495ddccb",
    "id": null,
    "metadata": {},
    "name": "EntityOrderingAddFormMutation",
    "operationKind": "mutation",
    "text": "mutation EntityOrderingAddFormMutation(\n  $input: CreateOrderingInput!\n) {\n  createOrdering(input: $input) {\n    ordering {\n      name\n      id\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "1e20006cf40fa58f5ba66b0eb3b3ee43";

export default node;
