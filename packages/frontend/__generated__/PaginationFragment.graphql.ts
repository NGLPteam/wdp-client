/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PaginationFragment = {
    readonly page: number | null;
    readonly pageCount: number | null;
    readonly " $refType": "PaginationFragment";
};
export type PaginationFragment$data = PaginationFragment;
export type PaginationFragment$key = {
    readonly " $data"?: PaginationFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PaginationFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PaginationFragment",
  "selections": [
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
      "name": "pageCount",
      "storageKey": null
    }
  ],
  "type": "PageInfo",
  "abstractKey": null
};
(node as any).hash = 'c81617d6eb26b51c23db990711335ee9';
export default node;
