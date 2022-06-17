/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type ImageDerivativeSize = "HERO" | "LARGE" | "MEDIUM" | "SANS_TEXT" | "SMALL" | "THUMB" | "WITH_TEXT" | "%future added value";
export type SiteLogoMode = "NONE" | "SANS_TEXT" | "WITH_TEXT" | "%future added value";
export type InstallationLogoFragment = {
    readonly site: {
        readonly installationName: string;
        readonly logoMode: SiteLogoMode;
    };
    readonly logo: {
        readonly storage: AttachmentStorage | null;
        readonly sansText: {
            readonly size: ImageDerivativeSize;
            readonly webp: {
                readonly width: number | null;
                readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
            };
        };
        readonly withText: {
            readonly size: ImageDerivativeSize;
            readonly webp: {
                readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
            };
        };
    };
    readonly " $refType": "InstallationLogoFragment";
};
export type InstallationLogoFragment$data = InstallationLogoFragment;
export type InstallationLogoFragment$key = {
    readonly " $data"?: InstallationLogoFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"InstallationLogoFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "size",
  "storageKey": null
},
v1 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ImageFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InstallationLogoFragment",
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
          "concreteType": "ImageSize",
          "kind": "LinkedField",
          "name": "sansText",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageDerivative",
              "kind": "LinkedField",
              "name": "webp",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "width",
                  "storageKey": null
                },
                (v1/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageSize",
          "kind": "LinkedField",
          "name": "withText",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageDerivative",
              "kind": "LinkedField",
              "name": "webp",
              "plural": false,
              "selections": [
                (v1/*: any*/)
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
(node as any).hash = '7c86c023984270c739e7cbb5d80a4bea';
export default node;
