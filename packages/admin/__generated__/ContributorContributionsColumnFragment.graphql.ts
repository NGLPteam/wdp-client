/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorContributionsColumnFragment = {
    readonly contributionCount: number;
    readonly " $refType": "ContributorContributionsColumnFragment";
};
export type ContributorContributionsColumnFragment$data = ContributorContributionsColumnFragment;
export type ContributorContributionsColumnFragment$key = {
    readonly " $data"?: ContributorContributionsColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorContributionsColumnFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorContributionsColumnFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "contributionCount",
      "storageKey": null
    }
  ],
  "type": "Contributor",
  "abstractKey": "__isContributor"
};
(node as any).hash = '4a99393c668c49859bd1354d7776526a';
export default node;
