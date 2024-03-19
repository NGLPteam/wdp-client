/**
 * @generated SignedSource<<bfadb045923883822018085cac5c4300>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DownloadCountFragment$data = {
  readonly total: number;
  readonly " $fragmentType": "DownloadCountFragment";
};
export type DownloadCountFragment$key = {
  readonly " $data"?: DownloadCountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DownloadCountFragment">;
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

(node as any).hash = "574ec2c9b8909f9a21d9ad00c7bc5573";

export default node;
