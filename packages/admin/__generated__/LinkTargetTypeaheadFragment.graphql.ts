/**
 * @generated SignedSource<<b386ab944871c389d38d0bb1d0ee65eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LinkTargetTypeaheadFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly target: {
        readonly " $fragmentSpreads": FragmentRefs<"getEntityTitleFragment">;
      };
      readonly targetId: string;
    };
  }>;
  readonly " $fragmentType": "LinkTargetTypeaheadFragment";
};
export type LinkTargetTypeaheadFragment$key = {
  readonly " $data"?: LinkTargetTypeaheadFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LinkTargetTypeaheadFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "LinkTargetTypeaheadFragment"
};

(node as any).hash = "b4189f08da6ce73f6f69d15868a3b1ed";

export default node;
