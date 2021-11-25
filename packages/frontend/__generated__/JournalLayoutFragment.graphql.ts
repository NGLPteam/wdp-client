/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"JournalHeroFragment" | "BreadcrumbsBarFragment">;
    readonly " $refType": "JournalLayoutFragment";
};
export type JournalLayoutFragment$data = JournalLayoutFragment;
export type JournalLayoutFragment$key = {
    readonly " $data"?: JournalLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"JournalLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JournalHeroFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsBarFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '55d2963878861301b4abc10e08ac47b1';
export default node;
