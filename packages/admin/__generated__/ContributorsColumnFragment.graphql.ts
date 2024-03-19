/**
 * @generated SignedSource<<9fe848c0362f9077273f1231112f28ca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorsColumnFragment$data = {
  readonly contributions?: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly contributor: {
          readonly __typename: "OrganizationContributor";
          readonly legalName: string | null | undefined;
          readonly slug: string;
        } | {
          readonly __typename: "PersonContributor";
          readonly familyName: string | null | undefined;
          readonly givenName: string | null | undefined;
          readonly slug: string;
        } | {
          // This will never be '%other', but we need some
          // value in case none of the concrete values match.
          readonly __typename: "%other";
        };
      };
    }>;
    readonly pageInfo: {
      readonly totalCount: number;
    };
  };
  readonly slug?: string;
  readonly " $fragmentType": "ContributorsColumnFragment";
};
export type ContributorsColumnFragment$key = {
  readonly " $data"?: ContributorsColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorsColumnFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ContributorsColumnFragment"
};

(node as any).hash = "49688186c330c39f7f10f5d677d52844";

export default node;
