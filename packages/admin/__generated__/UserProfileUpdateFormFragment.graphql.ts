/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserProfileUpdateFormFragment = {
    readonly givenName: string | null;
    readonly familyName: string | null;
    readonly email: string | null;
    readonly username: string | null;
    readonly avatar: {
        readonly small: {
            readonly png: {
                readonly url: string;
                readonly alt: string;
                readonly height: number;
                readonly width: number;
            } | null;
        };
    } | null;
    readonly " $refType": "UserProfileUpdateFormFragment";
};
export type UserProfileUpdateFormFragment$data = UserProfileUpdateFormFragment;
export type UserProfileUpdateFormFragment$key = {
    readonly " $data"?: UserProfileUpdateFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserProfileUpdateFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserProfileUpdateFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "givenName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "familyName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AssetPreview",
      "kind": "LinkedField",
      "name": "avatar",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PreviewImageMap",
          "kind": "LinkedField",
          "name": "small",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "PreviewImage",
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "height",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "width",
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
(node as any).hash = 'aa8e2370d106cfc7382eb01f084c64ae';
export default node;
