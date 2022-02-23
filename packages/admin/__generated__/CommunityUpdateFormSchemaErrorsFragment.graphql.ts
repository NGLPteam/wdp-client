/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityUpdateFormSchemaErrorsFragment = {
    readonly schemaErrors: ReadonlyArray<{
        readonly hint: boolean;
        readonly message: string;
        readonly metadata: unknown | null;
        readonly path: string;
    }>;
    readonly " $refType": "CommunityUpdateFormSchemaErrorsFragment";
};
export type CommunityUpdateFormSchemaErrorsFragment$data = CommunityUpdateFormSchemaErrorsFragment;
export type CommunityUpdateFormSchemaErrorsFragment$key = {
    readonly " $data"?: CommunityUpdateFormSchemaErrorsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityUpdateFormSchemaErrorsFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "CommunityUpdateFormSchemaErrorsFragment"
};
(node as any).hash = 'd4deb81658dfb8a236a3d4173167dcc1';
export default node;
