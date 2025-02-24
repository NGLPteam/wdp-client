/**
 * @generated SignedSource<<c90eb12cd27eef42859013b637f02c83>>
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
export type EntityOrderingEditFormFieldsFragment$data = {
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
  readonly " $fragmentType": "EntityOrderingEditFormFieldsFragment";
};
export type EntityOrderingEditFormFieldsFragment$key = {
  readonly " $data"?: EntityOrderingEditFormFieldsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingEditFormFieldsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderingEditFormFieldsFragment",
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
  "type": "Ordering",
  "abstractKey": null
};

(node as any).hash = "5999b787583f6c8310131650463e3f42";

export default node;
