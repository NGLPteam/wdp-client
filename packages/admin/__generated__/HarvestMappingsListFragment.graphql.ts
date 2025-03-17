/**
 * @generated SignedSource<<e2d9685a67ca522788b89c42431cfad2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestMappingsListFragment$data = {
  readonly harvestSets: {
    readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  };
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingsListDataFragment">;
  readonly " $fragmentType": "HarvestMappingsListFragment";
};
export type HarvestMappingsListFragment$key = {
  readonly " $data"?: HarvestMappingsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingsListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "order"
    },
    {
      "kind": "RootArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestMappingsListFragment",
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
      "args": [
        {
          "kind": "Variable",
          "name": "order",
          "variableName": "order"
        },
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page"
        },
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 20
        }
      ],
      "concreteType": "HarvestSetConnection",
      "kind": "LinkedField",
      "name": "harvestSets",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ModelListPageFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "HarvestMappingsListDataFragment"
    }
  ],
  "type": "HarvestSource",
  "abstractKey": null
};

(node as any).hash = "76b514807a0409d4e2b5dfbbdcb02dd6";

export default node;
