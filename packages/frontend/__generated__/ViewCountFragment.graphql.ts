/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ViewCountFragment = {
    readonly total: number;
    readonly " $refType": "ViewCountFragment";
};
export type ViewCountFragment$data = ViewCountFragment;
export type ViewCountFragment$key = {
    readonly " $data"?: ViewCountFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ViewCountFragment">;
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
(node as any).hash = '8d0992b3faf5585bf8224f1d5c070761';
export default node;
