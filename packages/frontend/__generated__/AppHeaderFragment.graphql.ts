/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppHeaderFragment = {
    readonly viewer: {
        readonly name: string | null;
    };
    readonly " $fragmentRefs": FragmentRefs<"InstallationNameFragment">;
    readonly " $refType": "AppHeaderFragment";
};
export type AppHeaderFragment$data = AppHeaderFragment;
export type AppHeaderFragment$key = {
    readonly " $data"?: AppHeaderFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppHeaderFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppHeaderFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InstallationNameFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '13569cf2f2e13fcfbdfead5363f75b37';
export default node;
