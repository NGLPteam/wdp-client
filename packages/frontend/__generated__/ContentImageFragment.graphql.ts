/**
 * @generated SignedSource<<3068c2c4d91c5c94967c88a9ba64b2dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContentImageFragment$data = {
  readonly large: {
    readonly webp: {
      readonly alt: string | null | undefined;
      readonly height: number | null | undefined;
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
  readonly small: {
    readonly webp: {
      readonly url: string | null | undefined;
      readonly width: number | null | undefined;
    };
  };
  readonly " $fragmentType": "ContentImageFragment";
};
export type ContentImageFragment$key = {
  readonly " $data"?: ContentImageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContentImageFragment">;
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
  "name": "ContentImageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "large",
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
            (v0/*: any*/),
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
      "name": "medium",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageSize",
      "kind": "LinkedField",
      "name": "small",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    }
  ],
  "type": "ImageAttachment",
  "abstractKey": null
};
})();

(node as any).hash = "5426b34c900bed00bbf58e1eeac9c36c";

export default node;
