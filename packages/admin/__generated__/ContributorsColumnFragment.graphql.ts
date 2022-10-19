/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorsColumnFragment = {
    readonly slug?: string | undefined;
    readonly contributions?: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly contributor: {
                    readonly __typename: "OrganizationContributor";
                    readonly slug: string;
                    readonly legalName: string | null;
                } | {
                    readonly __typename: "PersonContributor";
                    readonly slug: string;
                    readonly givenName: string | null;
                    readonly familyName: string | null;
                } | {
                    /*This will never be '%other', but we need some
                    value in case none of the concrete values match.*/
                    readonly __typename: "%other";
                };
            };
        }>;
        readonly pageInfo: {
            readonly totalCount: number;
        };
    } | undefined;
    readonly " $refType": "ContributorsColumnFragment";
};
export type ContributorsColumnFragment$data = ContributorsColumnFragment;
export type ContributorsColumnFragment$key = {
    readonly " $data"?: ContributorsColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorsColumnFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ContributorsColumnFragment"
};
(node as any).hash = '49688186c330c39f7f10f5d677d52844';
export default node;
