/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type FileUploadFragment = {
    readonly storage: AttachmentStorage | null;
    readonly thumb: {
        readonly png: {
            readonly alt: string | null;
            readonly url: string | null;
        };
    };
    readonly " $refType": "FileUploadFragment";
};
export type FileUploadFragment$data = FileUploadFragment;
export type FileUploadFragment$key = {
    readonly " $data"?: FileUploadFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FileUploadFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FileUploadFragment",
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
  "type": "ImageAttachment",
  "abstractKey": null
};
(node as any).hash = 'f25414f3b8f8d76db67fc7a08b8e0879';
export default node;
