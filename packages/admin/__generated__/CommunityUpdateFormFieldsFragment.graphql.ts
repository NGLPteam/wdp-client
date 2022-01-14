/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type HeroImageLayout = "ONE_COLUMN" | "TWO_COLUMN" | "%future added value";
export type CommunityUpdateFormFieldsFragment = {
    readonly title: string;
    readonly tagline: string | null;
    readonly summary: string | null;
    readonly heroImageLayout: HeroImageLayout;
    readonly heroImage: {
        readonly storage: AttachmentStorage | null;
        readonly thumb: {
            readonly png: {
                readonly alt: string | null;
                readonly url: string | null;
            };
        };
    };
    readonly " $refType": "CommunityUpdateFormFieldsFragment";
};
export type CommunityUpdateFormFieldsFragment$data = CommunityUpdateFormFieldsFragment;
export type CommunityUpdateFormFieldsFragment$key = {
    readonly " $data"?: CommunityUpdateFormFieldsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityUpdateFormFieldsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityUpdateFormFieldsFragment",
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
      "name": "tagline",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "heroImageLayout",
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
          "kind": "ScalarField",
          "name": "storage",
          "storageKey": null
        },
        {
          "alias": null,
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
              "name": "png",
              "plural": false,
              "selections": [
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
                  "name": "url",
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
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '3fce9fcdff34bd2bcb1e100cd5994939';
export default node;
