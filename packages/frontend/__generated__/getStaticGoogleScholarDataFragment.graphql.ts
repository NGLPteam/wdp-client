/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DatePrecision = "DAY" | "MONTH" | "NONE" | "YEAR" | "%future added value";
export type getStaticGoogleScholarDataFragment = {
    readonly issn?: string | null | undefined;
    readonly title?: string | undefined;
    readonly schemaDefinition?: {
        readonly identifier: string;
    } | undefined;
    readonly published?: {
        readonly precision: DatePrecision;
        readonly value: string | null;
    } | undefined;
    readonly pdf?: {
        readonly asset?: {
            readonly downloadUrl?: string | null | undefined;
        } | null | undefined;
    } | null | undefined;
    readonly community?: {
        readonly title: string;
    } | undefined;
    readonly contributions?: {
        readonly nodes: ReadonlyArray<{
            readonly role: string | null;
            readonly contributor: {
                readonly __typename: "PersonContributor";
                readonly familyName: string | null;
                readonly givenName: string | null;
            } | {
                readonly __typename: "OrganizationContributor";
                readonly legalName: string | null;
            } | {
                /*This will never be '%other', but we need some
                value in case none of the concrete values match.*/
                readonly __typename: "%other";
            };
        }>;
    } | undefined;
    readonly issueNumber?: {
        readonly value?: string | null | undefined;
    } | null | undefined;
    readonly volumeNumber?: {
        readonly value?: string | null | undefined;
    } | null | undefined;
    readonly startPage?: {
        readonly value?: number | null | undefined;
    } | null | undefined;
    readonly endPage?: {
        readonly value?: number | null | undefined;
    } | null | undefined;
    readonly institution?: {
        readonly value?: string | null | undefined;
    } | null | undefined;
    readonly journal?: {
        readonly title?: string | undefined;
    } | null | undefined;
    readonly volume?: {
        readonly number?: {
            readonly value?: string | null | undefined;
        } | null | undefined;
    } | null | undefined;
    readonly issue?: {
        readonly number?: {
            readonly value?: string | null | undefined;
        } | null | undefined;
    } | null | undefined;
    readonly " $refType": "getStaticGoogleScholarDataFragment";
};
export type getStaticGoogleScholarDataFragment$data = getStaticGoogleScholarDataFragment;
export type getStaticGoogleScholarDataFragment$key = {
    readonly " $data"?: getStaticGoogleScholarDataFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"getStaticGoogleScholarDataFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getStaticGoogleScholarDataFragment"
};
(node as any).hash = 'ad5f35b1b75fbcde2072f22393ecdab2';
export default node;
