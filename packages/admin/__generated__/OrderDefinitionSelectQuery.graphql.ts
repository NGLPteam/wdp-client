/**
 * @generated SignedSource<<f1ba37bf4a1cf24cdc1b5304fec115ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderingSchemaFilterInput = {
  identifier: string;
  namespace: string;
  version?: any | null | undefined;
};
export type OrderDefinitionSelectQuery$variables = {
  schemas?: ReadonlyArray<OrderingSchemaFilterInput> | null | undefined;
};
export type OrderDefinitionSelectQuery$data = {
  readonly orderingPaths: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"OrderDefinitionSelectOrderingPathFragment">;
  }>;
};
export type OrderDefinitionSelectQuery = {
  response: OrderDefinitionSelectQuery$data;
  variables: OrderDefinitionSelectQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "schemas"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "schemas",
    "variableName": "schemas"
  }
],
v2 = [
  {
    "kind": "InlineFragment",
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
        "name": "labelPrefix",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "grouping",
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
    "type": "OrderingPath",
    "abstractKey": "__isOrderingPath"
  }
],
v3 = [
  {
    "kind": "InlineDataFragmentSpread",
    "name": "OrderDefinitionSelectOrderingPathFragment",
    "selections": (v2/*: any*/),
    "args": null,
    "argumentDefinitions": ([]/*: any*/)
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OrderDefinitionSelectQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "orderingPaths",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "StaticOrderingPath",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "SchemaOrderingPath",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "AncestorStaticOrderingPath",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "AncestorSchemaOrderingPath",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OrderDefinitionSelectQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "orderingPaths",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v2/*: any*/),
            "type": "StaticOrderingPath",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v2/*: any*/),
            "type": "SchemaOrderingPath",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v2/*: any*/),
            "type": "AncestorStaticOrderingPath",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v2/*: any*/),
            "type": "AncestorSchemaOrderingPath",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a2b03f30a087eb9cf859b33607dbf0da",
    "id": null,
    "metadata": {},
    "name": "OrderDefinitionSelectQuery",
    "operationKind": "query",
    "text": "query OrderDefinitionSelectQuery(\n  $schemas: [OrderingSchemaFilterInput!]\n) {\n  orderingPaths(schemas: $schemas) {\n    __typename\n    ... on StaticOrderingPath {\n      ...OrderDefinitionSelectOrderingPathFragment\n    }\n    ... on SchemaOrderingPath {\n      ...OrderDefinitionSelectOrderingPathFragment\n    }\n    ... on AncestorStaticOrderingPath {\n      ...OrderDefinitionSelectOrderingPathFragment\n    }\n    ... on AncestorSchemaOrderingPath {\n      ...OrderDefinitionSelectOrderingPathFragment\n    }\n  }\n}\n\nfragment OrderDefinitionSelectOrderingPathFragment on OrderingPath {\n  __isOrderingPath: __typename\n  path\n  labelPrefix\n  label\n  description\n  grouping\n  type\n}\n"
  }
};
})();

(node as any).hash = "d93c9b1de7fcedfae55001b1b967d5c4";

export default node;
