/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PageCountFragment = {
    readonly totalCount: number;
    readonly " $refType": "PageCountFragment";
};
export type PageCountFragment$data = PageCountFragment;
export type PageCountFragment$key = {
    readonly " $data"?: PageCountFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PageCountFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PageCountFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "type": "PageInfo",
  "abstractKey": null
};
(node as any).hash = '0d284e7ee5fca6294f2d1fcd7ee76957';
export default node;
