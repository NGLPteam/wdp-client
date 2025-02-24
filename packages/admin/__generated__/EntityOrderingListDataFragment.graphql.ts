/**
 * @generated SignedSource<<405f672257ee7ef691aa6b969f21e6fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingListDataFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly count: number;
      readonly createdAt: string;
      readonly disabled: boolean;
      readonly id: string;
      readonly identifier: string;
      readonly inheritedFromSchema: boolean;
      readonly name: string | null | undefined;
      readonly slug: string;
    };
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "EntityOrderingListDataFragment";
};
export type EntityOrderingListDataFragment$key = {
  readonly " $data"?: EntityOrderingListDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingListDataFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderingListDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Ordering",
          "kind": "LinkedField",
          "name": "node",
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
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "inheritedFromSchema",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "disabled",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "createdAt",
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
              "name": "count",
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
      "name": "ModelListPageFragment"
    }
  ],
  "type": "OrderingConnection",
  "abstractKey": null
};

(node as any).hash = "29ea2e3a7b40e92c984fb537ae16af23";

export default node;
