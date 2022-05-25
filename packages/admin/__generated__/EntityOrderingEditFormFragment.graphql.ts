/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Direction = "ASCENDING" | "DESCENDING" | "%future added value";
export type OrderingDirectSelection = "CHILDREN" | "DESCENDANTS" | "NONE" | "%future added value";
export type OrderingRenderMode = "FLAT" | "TREE" | "%future added value";
export type EntityOrderingEditFormFragment = {
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
            readonly links: {
                readonly contains: boolean;
                readonly references: boolean;
            };
        };
        readonly filter: {
            readonly schemas: ReadonlyArray<{
                readonly namespace: string;
                readonly identifier: string;
                readonly version: unknown | null;
            }>;
        };
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"OrderDefinitionSelectControlFragment" | "SchemaCheckboxGroupFragment">;
    readonly " $refType": "EntityOrderingEditFormFragment";
};
export type EntityOrderingEditFormFragment$data = EntityOrderingEditFormFragment;
export type EntityOrderingEditFormFragment$key = {
    readonly " $data"?: EntityOrderingEditFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderingEditFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "identifier"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderingEditFormFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "identifier",
          "variableName": "identifier"
        }
      ],
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
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "OrderDefinitionSelectControlFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaCheckboxGroupFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = 'c319ce60a9b56f1967b4db795531be7b';
export default node;
