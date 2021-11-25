/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"BreadcrumbsBarFragment" | "IssueHeroFragment">;
    readonly " $refType": "IssueLayoutFragment";
};
export type IssueLayoutFragment$data = IssueLayoutFragment;
export type IssueLayoutFragment$key = {
    readonly " $data"?: IssueLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "IssueHeroFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'b179e2ec3a38547cb78b20725b05e73c';
export default node;
