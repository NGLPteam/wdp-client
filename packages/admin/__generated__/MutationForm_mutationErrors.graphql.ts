/**
 * @generated SignedSource<<eb20a14127ccb9d8e1874e6b5fe6a77f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MutationForm_mutationErrors$data = {
  readonly attributeErrors: ReadonlyArray<{
    readonly messages: ReadonlyArray<string>;
    readonly path: string;
    readonly type: string;
  }>;
  readonly globalErrors: ReadonlyArray<{
    readonly message: string;
  }>;
  readonly " $fragmentType": "MutationForm_mutationErrors";
};
export type MutationForm_mutationErrors$key = {
  readonly " $data"?: MutationForm_mutationErrors$data;
  readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "MutationForm_mutationErrors"
};

(node as any).hash = "9ad69ac04a00084b8a0ce28854ec1a0c";

export default node;
