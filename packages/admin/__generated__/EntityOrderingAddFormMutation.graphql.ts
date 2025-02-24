/**
 * @generated SignedSource<<8df707e757598d006f6fffaa493511b4>>
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
  clientMutationId?: string | null | undefined;
  entityId: string;
  filter?: OrderingFilterDefinitionInput | null | undefined;
  footer?: string | null | undefined;
  header?: string | null | undefined;
  identifier: string;
  name?: string | null | undefined;
  order: ReadonlyArray<OrderDefinitionInput>;
  render?: OrderingRenderDefinitionInput | null | undefined;
  select?: OrderingSelectDefinitionInput | null | undefined;
};
export type OrderingFilterDefinitionInput = {
  schemas?: ReadonlyArray<OrderingSchemaFilterInput> | null | undefined;
};
export type OrderingSchemaFilterInput = {
  identifier: string;
  namespace: string;
  version?: any | null | undefined;
};
export type OrderDefinitionInput = {
  direction?: Direction | null | undefined;
  nulls?: NullOrderPriority | null | undefined;
  path: string;
};
export type OrderingRenderDefinitionInput = {
  mode?: OrderingRenderMode | null | undefined;
};
export type OrderingSelectDefinitionInput = {
  direct?: OrderingDirectSelection | null | undefined;
  links?: OrderingSelectLinkDefinitionInput | null | undefined;
};
export type OrderingSelectLinkDefinitionInput = {
  contains?: boolean | null | undefined;
  references?: boolean | null | undefined;
};
export type EntityOrderingAddFormMutation$variables = {
  input: CreateOrderingInput;
};
export type EntityOrderingAddFormMutation$data = {
  readonly createOrdering: {
    readonly ordering: {
      readonly id: string;
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null | undefined;
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
  "concreteType": "Ordering",
  "kind": "LinkedField",
  "name": "ordering",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
},
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
          (v2/*: any*/),
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v3/*: any*/)
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
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "970897abe3ac3c3876264ff0ef1c0b54",
    "id": null,
    "metadata": {},
    "name": "EntityOrderingAddFormMutation",
    "operationKind": "mutation",
    "text": "mutation EntityOrderingAddFormMutation(\n  $input: CreateOrderingInput!\n) {\n  createOrdering(input: $input) {\n    ordering {\n      id\n      name\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "eb10b7030c1678728931a114dc73de84";

export default node;
