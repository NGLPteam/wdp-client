/**
 * @generated SignedSource<<bd831966cdf2b486a363811507747c3f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingLayoutFactoryFragment$data = {
  readonly initialOrdering: {
    readonly disabled: boolean;
    readonly identifier: string;
  } | null | undefined;
  readonly schemaDefinition: {
    readonly identifier: string;
  };
  readonly " $fragmentType": "EntityOrderingLayoutFactoryFragment";
};
export type EntityOrderingLayoutFactoryFragment$key = {
  readonly " $data"?: EntityOrderingLayoutFactoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingLayoutFactoryFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "EntityOrderingLayoutFactoryFragment"
};

(node as any).hash = "7eb8685538fb5c861fd8f398bcf2c172";

export default node;
