/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type SiteLogoUploadFragment = {
    readonly originalFilename: string | null;
    readonly storage: AttachmentStorage | null;
    readonly original: {
        readonly url: string | null;
        readonly alt: string | null;
    };
    readonly " $refType": "SiteLogoUploadFragment";
};
export type SiteLogoUploadFragment$data = SiteLogoUploadFragment;
export type SiteLogoUploadFragment$key = {
    readonly " $data"?: SiteLogoUploadFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SiteLogoUploadFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SiteLogoUploadFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "originalFilename",
      "storageKey": null
    },
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
          "name": "alt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SiteLogoAttachment",
  "abstractKey": null
};
(node as any).hash = '296b68eacf1bf47c6681f21879479e1a';
export default node;
