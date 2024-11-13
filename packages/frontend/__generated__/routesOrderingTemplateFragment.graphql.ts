/**
 * @generated SignedSource<<597c545ef48c57a99243f355cfcf2af5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type routesOrderingTemplateFragment$data = {
  readonly entry: {
    readonly __typename: "Collection";
  } | {
    readonly __typename: "Community";
  } | {
    readonly __typename: "EntityLink";
    readonly target: {
      readonly __typename: "Collection";
    } | {
      readonly __typename: "Community";
    } | {
      readonly __typename: "Item";
    } | {
      // This will never be '%other', but we need some
      // value in case none of the concrete values match.
      readonly __typename: "%other";
    };
  } | {
    readonly __typename: "Item";
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly entrySlug: string | null | undefined;
  readonly " $fragmentType": "routesOrderingTemplateFragment";
};
export type routesOrderingTemplateFragment$key = {
  readonly " $data"?: routesOrderingTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"routesOrderingTemplateFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "routesOrderingTemplateFragment"
};

(node as any).hash = "403c453ebec3cb7ad700d53bcde1689f";

export default node;
