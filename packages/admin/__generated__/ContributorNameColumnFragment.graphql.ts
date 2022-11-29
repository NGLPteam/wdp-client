/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorNameColumnFragment = {
    readonly __typename: string;
    readonly image: {
        readonly " $fragmentRefs": FragmentRefs<"AvatarFragment">;
    };
    readonly slug?: string | undefined;
    readonly legalName?: string | null | undefined;
    readonly givenName?: string | null | undefined;
    readonly familyName?: string | null | undefined;
    readonly " $refType": "ContributorNameColumnFragment";
};
export type ContributorNameColumnFragment$data = ContributorNameColumnFragment;
export type ContributorNameColumnFragment$key = {
    readonly " $data"?: ContributorNameColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorNameColumnFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ContributorNameColumnFragment"
};
(node as any).hash = 'cbf1f16cf51189c4c4fd055537653f50';
export default node;
