/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ViewerContextFragment = {
    readonly viewer: {
        readonly name: string | null;
        readonly allowedActions: ReadonlyArray<string>;
        readonly uploadAccess: boolean;
        readonly uploadToken: string | null;
        readonly avatar: {
            readonly small: {
                readonly png: {
                    readonly url: string | null;
                    readonly alt: string | null;
                };
            };
        };
    };
    readonly " $refType": "ViewerContextFragment";
};
export type ViewerContextFragment$data = ViewerContextFragment;
export type ViewerContextFragment$key = {
    readonly " $data"?: ViewerContextFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ViewerContextFragment">;
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
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
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
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '8fced43ab82c9fefbb86a0020f8ae6d5';
export default node;
