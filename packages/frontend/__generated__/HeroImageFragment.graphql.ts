/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type HeroImageFragment = {
    readonly image: {
        readonly alt: string | null;
        readonly url: string | null;
    };
    readonly " $refType": "HeroImageFragment";
};
export type HeroImageFragment$data = HeroImageFragment;
export type HeroImageFragment$key = {
    readonly " $data"?: HeroImageFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"HeroImageFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeroImageFragment",
  "selections": [
    {
      "alias": "image",
      "args": null,
      "concreteType": "ImageOriginal",
      "kind": "LinkedField",
      "name": "original",
      "plural": false,
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ImageAttachment",
  "abstractKey": null
};
(node as any).hash = 'eb7e4ca817b8fd6576ca7ef658b5bf75';
export default node;
