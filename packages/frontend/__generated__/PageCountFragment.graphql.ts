/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PageCountFragment = {
    readonly totalCount: number;
    readonly page: number | null;
    readonly perPage: number | null;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "page",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "perPage",
      "storageKey": null
    }
  ],
  "type": "PageInfo",
  "abstractKey": null
};
(node as any).hash = '848440a8d336a9e2248c808bab04e43c';
export default node;
