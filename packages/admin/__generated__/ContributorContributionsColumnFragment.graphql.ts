/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

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



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ContributorContributionsColumnFragment"
};
(node as any).hash = '43dabd25860fb4425ed3a9f052de53f5';
export default node;
