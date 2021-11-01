/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorLayoutQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ContributorLayoutFragment">;
    readonly " $refType": "ContributorLayoutQueryFragment";
};
export type ContributorLayoutQueryFragment$data = ContributorLayoutQueryFragment;
export type ContributorLayoutQueryFragment$key = {
    readonly " $data"?: ContributorLayoutQueryFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ContributorLayoutQueryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorLayoutQueryFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContributorLayoutFragment"
    }
  ],
  "type": "Contributor",
  "abstractKey": "__isContributor"
};
(node as any).hash = '9240691ef8449e30077bbb54709122ff';
export default node;
