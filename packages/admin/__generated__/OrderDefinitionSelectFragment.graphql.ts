/**
 * @generated SignedSource<<815c4d081be5a0efd5dbfefb04243a91>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDefinitionSelectFragment$data = {
  readonly schemaRanks: ReadonlyArray<{
    readonly identifier: string;
    readonly namespace: string;
  }>;
  readonly " $fragmentType": "OrderDefinitionSelectFragment";
};
export type OrderDefinitionSelectFragment$key = {
  readonly " $data"?: OrderDefinitionSelectFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrderDefinitionSelectFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderDefinitionSelectFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HierarchicalSchemaRank",
      "kind": "LinkedField",
      "name": "schemaRanks",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "ec88ca087f01a755fa082665d71573a8";

export default node;
