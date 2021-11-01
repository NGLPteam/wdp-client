/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TagsPropertyFragment = {
    readonly tags: ReadonlyArray<string>;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "TagsPropertyFragment";
};
export type TagsPropertyFragment$data = TagsPropertyFragment;
export type TagsPropertyFragment$key = {
    readonly " $data"?: TagsPropertyFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"TagsPropertyFragment">;
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
      "name": "tags",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "TagsProperty",
  "abstractKey": null
};
(node as any).hash = '19dcacba2ef4bd9689313c03b9001301';
export default node;
