/**
 * @generated SignedSource<<412ce1eaa349631ac23404cbe61d0239>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeroImageFragment$data = {
  readonly image: {
    readonly webp: {
      readonly url: string | null | undefined;
    };
  };
  readonly placeholder: {
    readonly webp: {
      readonly url: string | null | undefined;
    };
  };
  readonly " $fragmentType": "HeroImageFragment";
};
export type HeroImageFragment$key = {
  readonly " $data"?: HeroImageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeroImageFragment">;
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

(node as any).hash = "2d32646ff69656f2e801a8977e890e63";

export default node;
