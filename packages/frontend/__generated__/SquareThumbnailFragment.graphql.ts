/**
 * @generated SignedSource<<9f6f714bf306b0b0db3737200b7e0b35>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SquareThumbnailFragment$data = {
  readonly blur: {
    readonly webp: {
      readonly url: string | null | undefined;
    };
  };
  readonly thumb: {
    readonly webp: {
      readonly alt: string | null | undefined;
      readonly url: string | null | undefined;
    };
  };
  readonly " $fragmentType": "SquareThumbnailFragment";
};
export type SquareThumbnailFragment$key = {
  readonly " $data"?: SquareThumbnailFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SquareThumbnailFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SquareThumbnailFragment",
  "selections": [
    {
      "alias": "thumb",
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "medium",
      "plural": false,
      "selections": [
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
              "name": "alt",
              "storageKey": null
            },
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "blur",
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
          "selections": [
            (v0/*: any*/)
          ],
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

(node as any).hash = "4d853257e01619ae183124205962356c";

export default node;
