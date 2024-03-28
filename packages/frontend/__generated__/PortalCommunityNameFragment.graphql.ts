/**
 * @generated SignedSource<<f7809b745eba94cf796f280c26fc3fd8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PortalCommunityNameFragment$data = {
  readonly logo: {
    readonly original: {
      readonly height: number | null | undefined;
      readonly width: number | null | undefined;
    };
    readonly storage: AttachmentStorage | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"CommunityLogoFragment">;
  };
  readonly slug: string;
  readonly title: string;
  readonly " $fragmentType": "PortalCommunityNameFragment";
};
export type PortalCommunityNameFragment$key = {
  readonly " $data"?: PortalCommunityNameFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PortalCommunityNameFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PortalCommunityNameFragment",
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

(node as any).hash = "2ef258a01059688ab0ecd58e5307df5f";

export default node;
