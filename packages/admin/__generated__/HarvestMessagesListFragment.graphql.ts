/**
 * @generated SignedSource<<3e8ece25fec66031aba5436fb4154715>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestMessagesListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"HarvestMessageFragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelPageCountActionsFragment" | "ModelPaginationFragment">;
  readonly " $fragmentType": "HarvestMessagesListFragment";
};
export type HarvestMessagesListFragment$key = {
  readonly " $data"?: HarvestMessagesListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestMessagesListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestMessagesListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestMessage",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HarvestMessageFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPageCountActionsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPaginationFragment"
    }
  ],
  "type": "HarvestMessageConnection",
  "abstractKey": null
};

(node as any).hash = "f3b5528138194bfd0c4f693b8378cd42";

export default node;
