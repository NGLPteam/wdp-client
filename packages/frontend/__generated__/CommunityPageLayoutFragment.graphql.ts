/**
 * @generated SignedSource<<3cfd493b7624cdd04dce2a07bd8b32c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityPageLayoutFragment$data = {
  readonly body: string;
  readonly heroImage: {
    readonly hero: {
      readonly webp: {
        readonly alt: string | null | undefined;
        readonly url: string | null | undefined;
      };
    };
  };
  readonly title: string;
  readonly " $fragmentType": "CommunityPageLayoutFragment";
};
export type CommunityPageLayoutFragment$key = {
  readonly " $data"?: CommunityPageLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityPageLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityPageLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "heroImage",
      "plural": false,
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
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Page",
  "abstractKey": null
};

(node as any).hash = "0379e46db1f64b091388c873f8f08fac";

export default node;
