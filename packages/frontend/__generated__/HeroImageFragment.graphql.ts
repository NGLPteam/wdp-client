/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type HeroImageFragment = {
    readonly image: {
        readonly url: string | null;
    };
    readonly placeholder: {
        readonly webp: {
            readonly url: string | null;
        };
    };
    readonly " $refType": "HeroImageFragment";
};
export type HeroImageFragment$data = HeroImageFragment;
export type HeroImageFragment$key = {
    readonly " $data"?: HeroImageFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"HeroImageFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
];
return {
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
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": "placeholder",
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "thumb",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageDerivative",
          "kind": "LinkedField",
          "name": "webp",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ImageAttachment",
  "abstractKey": null
};
})();
(node as any).hash = '41d67fcd6c10e20990e237d308e97190';
export default node;
