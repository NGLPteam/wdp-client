/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ImageFragment = {
    readonly alt: string | null;
    readonly url: string | null;
    readonly width: number | null;
    readonly height: number | null;
    readonly " $refType": "ImageFragment";
};
export type ImageFragment$data = ImageFragment;
export type ImageFragment$key = {
    readonly " $data"?: ImageFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "alt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "width",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "height",
      "storageKey": null
    }
  ],
  "type": "Image",
  "abstractKey": "__isImage"
};
(node as any).hash = '9c46df6866386479bb24e28416e467ea';
export default node;
