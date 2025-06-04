/**
 * @generated SignedSource<<b3fae7654b8caaadbe48eb15bf7bcc0c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CommunityLogoFragment$data = {
  readonly original: {
    readonly alt: string | null | undefined;
    readonly height: number | null | undefined;
    readonly url: string | null | undefined;
    readonly width: number | null | undefined;
  };
  readonly storage: AttachmentStorage | null | undefined;
  readonly " $fragmentType": "CommunityLogoFragment";
};
export type CommunityLogoFragment$key = {
  readonly " $data"?: CommunityLogoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityLogoFragment">;
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
          "name": "alt",
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

(node as any).hash = "3728d61633090b439b0ee317e622f78a";

export default node;
