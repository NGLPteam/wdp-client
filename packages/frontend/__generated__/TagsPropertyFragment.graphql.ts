/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TagsPropertyFragment = {
    readonly fullPath: string;
    readonly label: string;
    readonly tags: ReadonlyArray<string>;
    readonly " $refType": "TagsPropertyFragment";
};
export type TagsPropertyFragment$data = TagsPropertyFragment;
export type TagsPropertyFragment$key = {
    readonly " $data"?: TagsPropertyFragment$data | undefined;
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
(node as any).hash = '53ab6c0e238d782df8c666e018a49b07';
export default node;
