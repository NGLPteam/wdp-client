/**
 * @generated SignedSource<<5d4fa860f6bc80fb9aa356be515851c7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ImageFragment$data = {
  readonly alt: string | null | undefined;
  readonly height: number | null | undefined;
  readonly url: string | null | undefined;
  readonly width: number | null | undefined;
  readonly " $fragmentType": "ImageFragment";
};
export type ImageFragment$key = {
  readonly " $data"?: ImageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
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

(node as any).hash = "9c46df6866386479bb24e28416e467ea";

export default node;
