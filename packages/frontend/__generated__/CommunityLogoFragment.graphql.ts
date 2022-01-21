/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type CommunityLogoFragment = {
    readonly storage: AttachmentStorage | null;
    readonly original: {
        readonly url: string | null;
        readonly width: number | null;
        readonly height: number | null;
    };
    readonly " $refType": "CommunityLogoFragment";
};
export type CommunityLogoFragment$data = CommunityLogoFragment;
export type CommunityLogoFragment$key = {
    readonly " $data"?: CommunityLogoFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLogoFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLogoFragment",
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
          "name": "url",
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
  "type": "ImageAttachment",
  "abstractKey": null
};
(node as any).hash = '86c953527b3fe7e8527a6b8d740ec5ab';
export default node;
