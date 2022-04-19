/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Direction = "ASCENDING" | "DESCENDING" | "%future added value";
export type NullOrderPriority = "FIRST" | "LAST" | "%future added value";
export type OrderingDirectSelection = "CHILDREN" | "DESCENDANTS" | "NONE" | "%future added value";
export type OrderingRenderMode = "FLAT" | "TREE" | "%future added value";
export type UpdateOrderingInput = {
    orderingId: string;
    name?: string | null | undefined;
    header?: string | null | undefined;
    footer?: string | null | undefined;
    filter?: OrderingFilterDefinitionInput | null | undefined;
    select?: OrderingSelectDefinitionInput | null | undefined;
    order: Array<OrderDefinitionInput>;
    render?: OrderingRenderDefinitionInput | null | undefined;
    clientMutationId?: string | null | undefined;
};
export type OrderingFilterDefinitionInput = {
    schemas?: Array<OrderingSchemaFilterInput> | null | undefined;
};
export type OrderingSchemaFilterInput = {
    namespace: string;
    identifier: string;
    version?: unknown | null | undefined;
};
export type OrderingSelectDefinitionInput = {
    direct?: OrderingDirectSelection | null | undefined;
    links?: OrderingSelectLinkDefinitionInput | null | undefined;
};
export type OrderingSelectLinkDefinitionInput = {
    contains?: boolean | null | undefined;
    references?: boolean | null | undefined;
};
export type OrderDefinitionInput = {
    path: string;
    direction?: Direction | null | undefined;
    nulls?: NullOrderPriority | null | undefined;
};
export type OrderingRenderDefinitionInput = {
    mode?: OrderingRenderMode | null | undefined;
};
export type EntityOrderingEditFormMutationVariables = {
    input: UpdateOrderingInput;
};
export type EntityOrderingEditFormMutationResponse = {
    readonly updateOrdering: {
        readonly ordering: {
            readonly id: string;
            readonly name: string | null;
            readonly render: {
                readonly mode: OrderingRenderMode;
            };
            readonly order: ReadonlyArray<{
                readonly path: string;
                readonly direction: Direction;
            }>;
            readonly select: {
                readonly direct: OrderingDirectSelection;
            };
            readonly filter: {
                readonly schemas: ReadonlyArray<{
                    readonly namespace: string;
                    readonly identifier: string;
                    readonly version: unknown | null;
                }>;
            };
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
    } | null;
};
export type EntityOrderingEditFormMutation = {
    readonly response: EntityOrderingEditFormMutationResponse;
    readonly variables: EntityOrderingEditFormMutationVariables;
};



/*
mutation EntityOrderingEditFormMutation(
  $input: UpdateOrderingInput!
) {
  updateOrdering(input: $input) {
    ordering {
      id
      name
      render {
        mode
      }
      order {
        path
        direction
      }
      select {
        direct
      }
      filter {
        schemas {
          namespace
          identifier
          version
        }
      }
    }
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "path",
  "storageKey": null
},
v3 = {
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingRenderDefinition",
      "kind": "LinkedField",
      "name": "render",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "mode",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderDefinition",
      "kind": "LinkedField",
      "name": "order",
      "plural": true,
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "direction",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingSelectDefinition",
      "kind": "LinkedField",
      "name": "select",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "direct",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingFilterDefinition",
      "kind": "LinkedField",
      "name": "filter",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "OrderingSchemaFilter",
          "kind": "LinkedField",
          "name": "schemas",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "namespace",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "identifier",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "version",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v5 = {
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
        (v2/*: any*/),
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
      "selections": (v4/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserError",
      "kind": "LinkedField",
      "name": "errors",
      "plural": true,
      "selections": (v4/*: any*/),
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
    "name": "EntityOrderingEditFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateOrderingPayload",
        "kind": "LinkedField",
        "name": "updateOrdering",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v5/*: any*/)
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
    "name": "EntityOrderingEditFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateOrderingPayload",
        "kind": "LinkedField",
        "name": "updateOrdering",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d7be1f7617eb2564cce11f93759a986e",
    "id": null,
    "metadata": {},
    "name": "EntityOrderingEditFormMutation",
    "operationKind": "mutation",
    "text": "mutation EntityOrderingEditFormMutation(\n  $input: UpdateOrderingInput!\n) {\n  updateOrdering(input: $input) {\n    ordering {\n      id\n      name\n      render {\n        mode\n      }\n      order {\n        path\n        direction\n      }\n      select {\n        direct\n      }\n      filter {\n        schemas {\n          namespace\n          identifier\n          version\n        }\n      }\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();
(node as any).hash = '1d344172129c473437b6a8ee30c21e71';
export default node;
