/**
 * @generated SignedSource<<dec92a63427d5c2066770500bb78c785>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewerContextFragment$data = {
  readonly allowedActions: ReadonlyArray<string>;
  readonly avatar: {
    readonly small: {
      readonly png: {
        readonly alt: string | null | undefined;
        readonly url: string | null | undefined;
      };
    };
  };
  readonly name: string | null | undefined;
  readonly uploadAccess: boolean;
  readonly uploadToken: string | null | undefined;
  readonly " $fragmentType": "ViewerContextFragment";
};
export type ViewerContextFragment$key = {
  readonly " $data"?: ViewerContextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewerContextFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewerContextFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "allowedActions",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "uploadAccess",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "uploadToken",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "avatar",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageSize",
          "kind": "LinkedField",
          "name": "small",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageDerivative",
              "kind": "LinkedField",
              "name": "png",
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
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "cdd69af8cd03dbb2a2b23fad601fe656";

export default node;
