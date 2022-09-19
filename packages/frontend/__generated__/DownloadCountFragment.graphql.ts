/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DownloadCountFragment = {
    readonly total: number;
    readonly " $refType": "DownloadCountFragment";
};
export type DownloadCountFragment$data = DownloadCountFragment;
export type DownloadCountFragment$key = {
    readonly " $data"?: DownloadCountFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"DownloadCountFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DownloadCountFragment",
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
(node as any).hash = '574ec2c9b8909f9a21d9ad00c7bc5573';
export default node;
