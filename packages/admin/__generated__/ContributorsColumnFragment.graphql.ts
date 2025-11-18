/**
 * @generated SignedSource<<700152629f45f30aea95f62c54c33b93>>
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

(node as any).hash = "7f7557aa623f4131688ca1c195090c55";

export default node;
