/**
 * @generated SignedSource<<a2c0806a7959f3f3da4c511d9bb36cb4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityUpdateFormSchemaErrorsFragment$data = {
  readonly schemaErrors: ReadonlyArray<{
    readonly hint: boolean;
    readonly message: string;
    readonly metadata: any | null;
    readonly path: string;
  }>;
  readonly " $fragmentType": "CommunityUpdateFormSchemaErrorsFragment";
};
export type CommunityUpdateFormSchemaErrorsFragment$key = {
  readonly " $data"?: CommunityUpdateFormSchemaErrorsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityUpdateFormSchemaErrorsFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "CommunityUpdateFormSchemaErrorsFragment"
};

(node as any).hash = "d4deb81658dfb8a236a3d4173167dcc1";

export default node;
