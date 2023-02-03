/**
 * @generated SignedSource<<e6cc8e92aaebef11c44ca7989a61f7b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useDestroyerFragment$data = {
  readonly destroyed?: boolean | null;
  readonly disabled?: boolean | null;
  readonly globalErrors?: ReadonlyArray<{
    readonly message: string;
    readonly type: string;
  }>;
  readonly revoked?: boolean | null;
  readonly " $fragmentType": "useDestroyerFragment";
};
export type useDestroyerFragment$key = {
  readonly " $data"?: useDestroyerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useDestroyerFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "useDestroyerFragment"
};

(node as any).hash = "fde776a3a4a19ebefb1b262474b47125";

export default node;
