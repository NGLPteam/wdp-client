/**
 * @generated SignedSource<<d6525fc17aea4a50c409490201d2111e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JournalLayoutFragment$data = {
  readonly related: {
    readonly " $fragmentSpreads": FragmentRefs<"RelatedJournalsFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment" | "EntityNavBarFragment" | "JournalHeroFragment">;
  readonly " $fragmentType": "JournalLayoutFragment";
};
export type JournalLayoutFragment$key = {
  readonly " $data"?: JournalLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"JournalLayoutFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "JournalLayoutFragment"
};

(node as any).hash = "06bb0cb8010364018cac0aa8003eacaf";

export default node;
