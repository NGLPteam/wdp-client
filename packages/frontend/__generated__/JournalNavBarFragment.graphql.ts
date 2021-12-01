/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalNavBarFragment = {
    readonly title: string;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "JournalNavListFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'e27560d20046a2aec453a6cd5a50a119';
export default node;
