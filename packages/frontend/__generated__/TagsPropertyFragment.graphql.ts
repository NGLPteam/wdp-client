/**
 * @generated SignedSource<<dcc6251f5c25f3acc43ff6df74ba43cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TagsPropertyFragment$data = {
  readonly fullPath: string;
  readonly label: string;
  readonly tags: ReadonlyArray<string>;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
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

(node as any).hash = "53ab6c0e238d782df8c666e018a49b07";

export default node;
