/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type CommunityNameFragment = {
    readonly title: string;
    readonly slug: string;
    readonly logo: {
        readonly storage: AttachmentStorage | null;
        readonly original: {
            readonly width: number | null;
            readonly height: number | null;
        };
        readonly " $fragmentRefs": FragmentRefs<"CommunityLogoFragment">;
    };
    readonly " $refType": "CommunityNameFragment";
};
export type CommunityNameFragment$data = CommunityNameFragment;
export type CommunityNameFragment$key = {
    readonly " $data"?: CommunityNameFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityNameFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityNameFragment",
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
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "logo",
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
          "concreteType": "ImageOriginal",
          "kind": "LinkedField",
          "name": "original",
          "plural": false,
          "selections": [
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CommunityLogoFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '0ee2f108689e78513890a8f835de0179';
export default node;
