/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalHeroFragment = {
    readonly title: string;
    readonly " $refType": "JournalHeroFragment";
};
export type JournalHeroFragment$data = JournalHeroFragment;
export type JournalHeroFragment$key = {
    readonly " $data"?: JournalHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"JournalHeroFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalHeroFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '6c482cdff599bc2f849f15c8591fff35';
export default node;
