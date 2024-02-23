/**
 * @generated SignedSource<<5b3be2ea52b6b98b786cdcb4ff4487ec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CoverImageFragment$data = {
  readonly image: {
    readonly webp: {
      readonly alt: string | null | undefined;
      readonly height: number | null | undefined;
      readonly url: string | null | undefined;
      readonly width: number | null | undefined;
    };
  };
  readonly " $fragmentType": "CoverImageFragment";
};
export type CoverImageFragment$key = {
  readonly " $data"?: CoverImageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CoverImageFragment",
  "selections": [
    {
      "alias": "image",
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
              "name": "url",
              "storageKey": null
            },
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
  "type": "ImageAttachment",
  "abstractKey": null
};

(node as any).hash = "dafb0a22ac3f75f43e228c73bf36c68b";

export default node;
