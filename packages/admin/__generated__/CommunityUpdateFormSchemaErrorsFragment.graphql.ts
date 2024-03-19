/**
 * @generated SignedSource<<8c1f4e6c7c9257cd278e9cf0e25d7676>>
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
    readonly metadata: any | null | undefined;
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
