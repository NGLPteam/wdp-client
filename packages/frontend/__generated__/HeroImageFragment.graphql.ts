/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type HeroImageFragment = {
    readonly image: {
        readonly webp: {
            readonly url: string | null;
        };
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
    "concreteType": "ImageDerivative",
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
      }
    ],
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
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "hero",
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
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "ImageAttachment",
  "abstractKey": null
};
})();
(node as any).hash = '2d32646ff69656f2e801a8977e890e63';
export default node;
