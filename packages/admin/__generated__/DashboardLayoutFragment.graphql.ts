/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DashboardLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"DashboardInstallationFragment" | "DashboardCollectionsFragment">;
    readonly " $refType": "DashboardLayoutFragment";
};
export type DashboardLayoutFragment$data = DashboardLayoutFragment;
export type DashboardLayoutFragment$key = {
    readonly " $data"?: DashboardLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"DashboardLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "order"
    },
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DashboardInstallationFragment"
    },
    {
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
        }
      ],
      "kind": "FragmentSpread",
      "name": "DashboardCollectionsFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'c89c9967d9b88bf575bc4df05c619b54';
export default node;
