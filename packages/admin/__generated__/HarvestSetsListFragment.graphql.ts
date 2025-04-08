/**
 * @generated SignedSource<<dda44d7b0305f1d45cbbdc3e53b97eac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestSetsListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly description: string | null | undefined;
    readonly id: string;
    readonly identifier: string;
    readonly name: string;
    readonly slug: string;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "HarvestSetsListFragment";
};
export type HarvestSetsListFragment$key = {
  readonly " $data"?: HarvestSetsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestSetsListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestSetsListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestSet",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
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
          "name": "identifier",
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
          "name": "description",
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
  "type": "HarvestSetConnection",
  "abstractKey": null
};

(node as any).hash = "011d432de007799c25eda42f308b134a";

export default node;
