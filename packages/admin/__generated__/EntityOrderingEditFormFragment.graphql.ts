/**
 * @generated SignedSource<<d7527b49fcc8cc2a40782d1515d5e674>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Direction = "ASCENDING" | "DESCENDING" | "%future added value";
export type OrderingDirectSelection = "CHILDREN" | "DESCENDANTS" | "NONE" | "%future added value";
export type OrderingRenderMode = "FLAT" | "TREE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingEditFormFragment$data = {
  readonly ordering: {
    readonly filter: {
      readonly schemas: ReadonlyArray<{
        readonly identifier: string;
        readonly namespace: string;
        readonly version: any | null;
      }>;
    };
    readonly id: string;
    readonly name: string | null;
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
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"OrderDefinitionSelectControlFragment" | "SchemaCheckboxGroupFragment">;
  readonly " $fragmentType": "EntityOrderingEditFormFragment";
};
export type EntityOrderingEditFormFragment$key = {
  readonly " $data"?: EntityOrderingEditFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingEditFormFragment">;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "OrderDefinitionSelectControlFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaCheckboxGroupFragment"
    },
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
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "c319ce60a9b56f1967b4db795531be7b";

export default node;
