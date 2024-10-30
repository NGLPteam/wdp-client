/**
 * @generated SignedSource<<63fcdca75e5e239b6fe992a07109a981>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FactoryTemplatesEntityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ContributorsTemplateFragment" | "DetailTemplateEntityFragment">;
  readonly " $fragmentType": "FactoryTemplatesEntityFragment";
};
export type FactoryTemplatesEntityFragment$key = {
  readonly " $data"?: FactoryTemplatesEntityFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FactoryTemplatesEntityFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FactoryTemplatesEntityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContributorsTemplateFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DetailTemplateEntityFragment"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "0f97b112b0ae44d923602d01b9def7e6";

export default node;
