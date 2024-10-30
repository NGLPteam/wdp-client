/**
 * @generated SignedSource<<8d872f772a6c7271ab37b717906c7f17>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailTemplateEntityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"FullDetailFragment" | "SummaryDetailEntityFragment">;
  readonly " $fragmentType": "DetailTemplateEntityFragment";
};
export type DetailTemplateEntityFragment$key = {
  readonly " $data"?: DetailTemplateEntityFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DetailTemplateEntityFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailTemplateEntityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FullDetailFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SummaryDetailEntityFragment"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "c21c599073d17687ebe3cf08d05d22fa";

export default node;
