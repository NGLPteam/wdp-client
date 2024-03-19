/**
 * @generated SignedSource<<c0632a26493b526163cebb3ce5838236>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TagsPropertyFragment$data = {
  readonly tags: ReadonlyArray<string>;
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "TagsPropertyFragment";
};
export type TagsPropertyFragment$key = {
  readonly " $data"?: TagsPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TagsPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TagsPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tags",
      "storageKey": null
    }
  ],
  "type": "TagsProperty",
  "abstractKey": null
};

(node as any).hash = "19dcacba2ef4bd9689313c03b9001301";

export default node;
