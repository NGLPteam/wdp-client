/**
 * @generated SignedSource<<78d491fc43f74964bd5a40723302169d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FactoryTemplatesEntityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ContributorsTemplateFragment">;
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
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "3f3402eef64573c8a96cfb99a33dca5c";

export default node;
