/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityHeroFragment = {
    readonly title: string;
    readonly tagline: string | null;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tagline",
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = 'fc1aa7fb2e5ba84a5c9a83d54c9dfcb5';
export default node;
