/**
 * @generated SignedSource<<b25fdfa701ceba36e6399248ef2bc4f5>>
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
export type UpdateOrderingInput = {
  clientMutationId?: string | null | undefined;
  filter?: OrderingFilterDefinitionInput | null | undefined;
  footer?: string | null | undefined;
  header?: string | null | undefined;
  name?: string | null | undefined;
  order: ReadonlyArray<OrderDefinitionInput>;
  orderingId: string;
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
export type EntityOrderingEditFormMutation$variables = {
  input: UpdateOrderingInput;
};
export type EntityOrderingEditFormMutation$data = {
  readonly updateOrdering: {
    readonly ordering: {
      readonly filter: {
        readonly schemas: ReadonlyArray<{
          readonly identifier: string;
          readonly namespace: string;
          readonly version: any | null | undefined;
        }>;
      };
      readonly id: string;
      readonly name: string | null | undefined;
      readonly order: ReadonlyArray<{
        readonly direction: Direction;
        readonly path: string;
      }>;
      readonly render: {
        readonly mode: OrderingRenderMode;
      };
      readonly select: {
        readonly direct: OrderingDirectSelection;
        readonly links: {
          readonly contains: boolean;
          readonly references: boolean;
        };
      };
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null | undefined;
};
export type EntityOrderingEditFormMutation = {
  response: EntityOrderingEditFormMutation$data;
  variables: EntityOrderingEditFormMutation$variables;
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
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "OrderingSelectLinkDefinition",
          "kind": "LinkedField",
          "name": "links",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "contains",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "references",
              "storageKey": null
            }
          ],
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
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f408dfbd2407c05b725fd266c394736d",
    "id": null,
    "metadata": {},
    "name": "EntityOrderingEditFormMutation",
    "operationKind": "mutation",
    "text": "mutation EntityOrderingEditFormMutation(\n  $input: UpdateOrderingInput!\n) {\n  updateOrdering(input: $input) {\n    ordering {\n      id\n      name\n      render {\n        mode\n      }\n      order {\n        path\n        direction\n      }\n      select {\n        direct\n        links {\n          contains\n          references\n        }\n      }\n      filter {\n        schemas {\n          namespace\n          identifier\n          version\n        }\n      }\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "bc6470ca858ab929bb70b4461d48e3a5";

export default node;
