/**
 * @generated SignedSource<<1edfe5d6c9d1de27eaef7af0a5d2682d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueLayoutFragment$data = {
  readonly contributions: {
    readonly pageInfo: {
      readonly totalCount: number;
    };
    readonly " $fragmentSpreads": FragmentRefs<"ContributionsBlockFragment">;
  };
  readonly relatedCollections: {
    readonly " $fragmentSpreads": FragmentRefs<"RelatedIssuesFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment" | "IssueHeroFragment">;
  readonly " $fragmentType": "IssueLayoutFragment";
};
export type IssueLayoutFragment$key = {
  readonly " $data"?: IssueLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueLayoutFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "IssueLayoutFragment"
};

(node as any).hash = "eb78bf236c41518135603b201ea06553";

export default node;
