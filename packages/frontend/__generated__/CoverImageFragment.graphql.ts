/**
 * @generated SignedSource<<36de2a073a9df746f7381fee9c4ede97>>
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

(node as any).hash = "13105e852b544a59ae0206169ace7205";

export default node;
