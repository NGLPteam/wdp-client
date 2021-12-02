/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalNavBarFragment = {
    readonly title: string;
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"JournalNavListFragment">;
    readonly " $refType": "JournalNavBarFragment";
};
export type JournalNavBarFragment$data = JournalNavBarFragment;
export type JournalNavBarFragment$key = {
    readonly " $data"?: JournalNavBarFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"JournalNavBarFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalNavBarFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JournalNavListFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'e00fb2456af7ad07eb5eb0bf3cc8a880';
export default node;
