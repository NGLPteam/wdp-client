/**
 * @generated SignedSource<<09137d1692607f48bc3dc604ece38219>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityAnnouncementLayoutFactoryFragment$data = {
  readonly announcement?: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementLayoutFragment">;
  } | null | undefined;
  readonly " $fragmentType": "EntityAnnouncementLayoutFactoryFragment";
};
export type EntityAnnouncementLayoutFactoryFragment$key = {
  readonly " $data"?: EntityAnnouncementLayoutFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementLayoutFactoryFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "EntityAnnouncementLayoutFactoryFragment"
};

(node as any).hash = "f9184978fd11fafe86be6e5327716607";

export default node;
