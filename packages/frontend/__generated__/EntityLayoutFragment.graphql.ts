/**
 * @generated SignedSource<<059f41bafe27b6a70bf44183d553b9b7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityLayoutFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment" | "EntityHeroFragment" | "EntityNavBarFragment">;
  readonly " $fragmentType": "EntityLayoutFragment";
};
export type EntityLayoutFragment$key = {
  readonly " $data"?: EntityLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityLayoutFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "EntityLayoutFragment"
};

(node as any).hash = "d792b645f55734014cabc021c72db2e6";

export default node;
