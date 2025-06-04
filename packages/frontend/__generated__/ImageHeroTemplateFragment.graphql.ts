/**
 * @generated SignedSource<<e1eaaa5ce0c110de6531aa615b3310e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ImageHeroTemplateFragment$data = {
  readonly hero: {
    readonly webp: {
      readonly alt: string | null | undefined;
      readonly height: number | null | undefined;
      readonly url: string | null | undefined;
      readonly width: number | null | undefined;
    };
  };
  readonly large: {
    readonly webp: {
      readonly url: string | null | undefined;
      readonly width: number | null | undefined;
    };
  };
  readonly medium: {
    readonly webp: {
      readonly url: string | null | undefined;
      readonly width: number | null | undefined;
    };
  };
  readonly " $fragmentType": "ImageHeroTemplateFragment";
};
export type ImageHeroTemplateFragment$key = {
  readonly " $data"?: ImageHeroTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ImageHeroTemplateFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageDerivative",
    "kind": "LinkedField",
    "name": "webp",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImageHeroTemplateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "hero",
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
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "alt",
              "storageKey": null
            },
            (v1/*: any*/),
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "large",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "medium",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    }
  ],
  "type": "ImageAttachment",
  "abstractKey": null
};
})();

(node as any).hash = "d083c48145311a48326c5db5003eacad";

export default node;
