/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type OrderingPathGrouping = "ENTITY" | "LINK" | "PROPS" | "SCHEMA" | "%future added value";
export type SchemaPropertyType = "ASSET" | "ASSETS" | "BOOLEAN" | "CONTRIBUTOR" | "CONTRIBUTORS" | "DATE" | "EMAIL" | "FLOAT" | "FULL_TEXT" | "GROUP" | "INTEGER" | "MARKDOWN" | "MULTISELECT" | "SELECT" | "STRING" | "TAGS" | "TIMESTAMP" | "UNKNOWN" | "URL" | "VARIABLE_DATE" | "%future added value";
export type OrderingSchemaFilterInput = {
    namespace: string;
    identifier: string;
    version?: unknown | null | undefined;
};
export type OrderDefinitionSelectQueryVariables = {
    schemas?: Array<OrderingSchemaFilterInput> | null | undefined;
};
export type OrderDefinitionSelectQueryResponse = {
    readonly orderingPaths: ReadonlyArray<{
        readonly path?: string | undefined;
        readonly labelPrefix?: string | null | undefined;
        readonly label?: string | undefined;
        readonly description?: string | null | undefined;
        readonly grouping?: OrderingPathGrouping | undefined;
        readonly type?: SchemaPropertyType | undefined;
    }>;
};
export type OrderDefinitionSelectQuery = {
    readonly response: OrderDefinitionSelectQueryResponse;
    readonly variables: OrderDefinitionSelectQueryVariables;
};



/*
query OrderDefinitionSelectQuery(
  $schemas: [OrderingSchemaFilterInput!]
) {
  orderingPaths(schemas: $schemas) {
    __typename
    ... on StaticOrderingPath {
      path
      labelPrefix
      label
      description
      grouping
      type
    }
    ... on SchemaOrderingPath {
      path
      labelPrefix
      label
      description
      grouping
      type
    }
  }
}
*/

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
v3 = {
  "kind": "InlineFragment",
  "selections": (v2/*: any*/),
  "type": "StaticOrderingPath",
  "abstractKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": (v2/*: any*/),
  "type": "SchemaOrderingPath",
  "abstractKey": null
};
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
          (v3/*: any*/),
          (v4/*: any*/)
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
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "02fffe0aa1dcba2b6d8f5b7e994f44a7",
    "id": null,
    "metadata": {},
    "name": "OrderDefinitionSelectQuery",
    "operationKind": "query",
    "text": "query OrderDefinitionSelectQuery(\n  $schemas: [OrderingSchemaFilterInput!]\n) {\n  orderingPaths(schemas: $schemas) {\n    __typename\n    ... on StaticOrderingPath {\n      path\n      labelPrefix\n      label\n      description\n      grouping\n      type\n    }\n    ... on SchemaOrderingPath {\n      path\n      labelPrefix\n      label\n      description\n      grouping\n      type\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4c09db9ef869d97d004c8259a189e40e';
export default node;
