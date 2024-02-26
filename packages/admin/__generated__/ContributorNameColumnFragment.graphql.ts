/**
 * @generated SignedSource<<c992bdc490e311b206a54715ff828bf6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorNameColumnFragment$data = {
  readonly __typename: string;
  readonly familyName?: string | null | undefined;
  readonly givenName?: string | null | undefined;
  readonly image: {
    readonly " $fragmentSpreads": FragmentRefs<"AvatarFragment">;
  };
  readonly legalName?: string | null | undefined;
  readonly slug?: string;
  readonly " $fragmentType": "ContributorNameColumnFragment";
};
export type ContributorNameColumnFragment$key = {
  readonly " $data"?: ContributorNameColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorNameColumnFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ContributorNameColumnFragment"
};

(node as any).hash = "cbf1f16cf51189c4c4fd055537653f50";

export default node;
