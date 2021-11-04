/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutFragment = {
    readonly name: string;
    readonly slug: string;
    readonly " $refType": "CommunityLayoutFragment";
};
export type CommunityLayoutFragment$data = CommunityLayoutFragment;
export type CommunityLayoutFragment$key = {
    readonly " $data"?: CommunityLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '0b881967f69faa987449e466bf201d07';
export default node;
