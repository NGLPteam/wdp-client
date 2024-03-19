/**
 * @generated SignedSource<<2fa5fe1915e90e8fa26bebfad5b44cc8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewCountFragment$data = {
  readonly total: number;
  readonly " $fragmentType": "ViewCountFragment";
};
export type ViewCountFragment$key = {
  readonly " $data"?: ViewCountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewCountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewCountFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "total",
      "storageKey": null
    }
  ],
  "type": "AnalyticsEventCountSummary",
  "abstractKey": null
};

(node as any).hash = "8d0992b3faf5585bf8224f1d5c070761";

export default node;
