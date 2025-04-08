/**
 * @generated SignedSource<<75e6b15c9140fd94ae9e3adf8f730392>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestRecordLayoutFragment$data = {
  readonly harvestSource: {
    readonly name: string;
    readonly slug: string;
  };
  readonly identifier: string;
  readonly " $fragmentType": "HarvestRecordLayoutFragment";
};
export type HarvestRecordLayoutFragment$key = {
  readonly " $data"?: HarvestRecordLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestRecordLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestRecordLayoutFragment",
  "selections": [
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
      "concreteType": "HarvestSource",
      "kind": "LinkedField",
      "name": "harvestSource",
      "plural": false,
      "selections": [
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
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HarvestRecord",
  "abstractKey": null
};

(node as any).hash = "7063db6987016179dddeba21d36320c9";

export default node;
