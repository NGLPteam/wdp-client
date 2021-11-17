/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityHeroFragment = {
    readonly title: string;
    readonly " $refType": "CommunityHeroFragment";
};
export type CommunityHeroFragment$data = CommunityHeroFragment;
export type CommunityHeroFragment$key = {
    readonly " $data"?: CommunityHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityHeroFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityHeroFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '55783404624464d2721daae902a097c5';
export default node;
