/**
 * @generated SignedSource<<d32b3268d86ca708a47b13313ac8cf44>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SiteLogoUploadFragment$data = {
  readonly original: {
    readonly alt: string | null | undefined;
    readonly url: string | null | undefined;
  };
  readonly originalFilename: string | null | undefined;
  readonly storage: AttachmentStorage | null | undefined;
  readonly " $fragmentType": "SiteLogoUploadFragment";
};
export type SiteLogoUploadFragment$key = {
  readonly " $data"?: SiteLogoUploadFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SiteLogoUploadFragment">;
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

(node as any).hash = "296b68eacf1bf47c6681f21879479e1a";

export default node;
