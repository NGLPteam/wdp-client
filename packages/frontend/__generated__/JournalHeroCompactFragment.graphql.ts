/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalHeroCompactFragment = {
    readonly title: string;
    readonly subtitle: string | null;
    readonly " $refType": "JournalHeroCompactFragment";
};
export type JournalHeroCompactFragment$data = JournalHeroCompactFragment;
export type JournalHeroCompactFragment$key = {
    readonly " $data"?: JournalHeroCompactFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"JournalHeroCompactFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalHeroCompactFragment",
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
      "name": "subtitle",
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '8f92ce0f1126e6e8f0c98cefffcdf8e5';
export default node;
