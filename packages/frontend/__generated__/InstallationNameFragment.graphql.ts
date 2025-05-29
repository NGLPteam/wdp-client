/**
 * @generated SignedSource<<9e2c0ca68b7cb563ef2ab5c47a78e6e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type ImageDerivativeSize = "HERO" | "LARGE" | "MEDIUM" | "SANS_TEXT" | "SMALL" | "THUMB" | "WITH_TEXT" | "%future added value";
export type SiteLogoMode = "NONE" | "SANS_TEXT" | "WITH_TEXT" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type InstallationNameFragment$data = {
  readonly logo: {
    readonly original: {
      readonly alt: string | null | undefined;
      readonly height: number | null | undefined;
      readonly originalFilename: string | null | undefined;
      readonly url: string | null | undefined;
      readonly width: number | null | undefined;
    };
    readonly sansText: {
      readonly size: ImageDerivativeSize;
      readonly webp: {
        readonly alt: string | null | undefined;
        readonly height: number | null | undefined;
        readonly url: string | null | undefined;
        readonly width: number | null | undefined;
      };
    };
    readonly storage: AttachmentStorage | null | undefined;
  };
  readonly site: {
    readonly installationName: string;
    readonly logoMode: SiteLogoMode;
  };
  readonly " $fragmentType": "InstallationNameFragment";
};
export type InstallationNameFragment$key = {
  readonly " $data"?: InstallationNameFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"InstallationNameFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InstallationNameFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SiteSettings",
      "kind": "LinkedField",
      "name": "site",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "installationName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "logoMode",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SiteLogoAttachment",
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
              "name": "originalFilename",
              "storageKey": null
            },
            (v0/*: any*/),
            (v1/*: any*/),
            (v2/*: any*/),
            (v3/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageSize",
          "kind": "LinkedField",
          "name": "sansText",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "size",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageDerivative",
              "kind": "LinkedField",
              "name": "webp",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
                (v2/*: any*/),
                (v3/*: any*/)
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
  "type": "GlobalConfiguration",
  "abstractKey": null
};
})();

(node as any).hash = "5460275d88ee127097a6365fc5d9da45";

export default node;
