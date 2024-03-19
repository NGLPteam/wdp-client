/**
 * @generated SignedSource<<f0e2688177a8d9164c826ba95a223a19>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type getEntityTitleFragment$data = {
  readonly __typename: string;
  readonly namedAncestors?: ReadonlyArray<{
    readonly ancestor: {
      readonly title?: string;
    };
  }>;
  readonly schemaVersion: {
    readonly identifier: string;
  };
  readonly title: string;
  readonly " $fragmentType": "getEntityTitleFragment";
};
export type getEntityTitleFragment$key = {
  readonly " $data"?: getEntityTitleFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"getEntityTitleFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getEntityTitleFragment"
};

(node as any).hash = "b2c655a56c2308a93728710382f17ecd";

export default node;
