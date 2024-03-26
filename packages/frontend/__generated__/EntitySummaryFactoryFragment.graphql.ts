/**
 * @generated SignedSource<<8a47130f6e4cd7aab71b6da06642b528>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntitySummaryFactoryFragment$data = {
  readonly schemaDefinition: {
    readonly identifier: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ArticleSummaryFragment" | "DissertationSummaryFragment" | "EntitySummaryFragment" | "IssueSummaryFragment" | "JournalSummaryFragment" | "VolumeSummaryFragment">;
  readonly " $fragmentType": "EntitySummaryFactoryFragment";
};
export type EntitySummaryFactoryFragment$key = {
  readonly " $data"?: EntitySummaryFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntitySummaryFactoryFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "EntitySummaryFactoryFragment"
};

(node as any).hash = "d26c5b530748832321d0b85a1b1037a8";

export default node;
