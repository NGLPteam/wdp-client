/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CoverImageFragment = {
    readonly alt: string;
    readonly image: {
        readonly webp: {
            readonly url: string;
            readonly alt: string;
            readonly width: number;
            readonly height: number;
        } | null;
    };
    readonly " $refType": "CoverImageFragment";
};
export type CoverImageFragment$data = CoverImageFragment;
export type CoverImageFragment$key = {
    readonly " $data"?: CoverImageFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CoverImageFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "image",
      "args": null,
      "concreteType": "PreviewImageMap",
      "kind": "LinkedField",
      "name": "large",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PreviewImage",
          "kind": "LinkedField",
          "name": "webp",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "url",
              "storageKey": null
            },
            (v0/*: any*/),
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
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "AssetPreview",
  "abstractKey": null
};
})();
(node as any).hash = '5ad5f8b15dec3da6f3d5bd43ebbaebd7';
export default node;
