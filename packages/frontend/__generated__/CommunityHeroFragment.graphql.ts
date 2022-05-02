/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type HeroImageLayout = "ONE_COLUMN" | "TWO_COLUMN" | "%future added value";
export type CommunityHeroFragment = {
    readonly title: string;
    readonly tagline: string | null;
    readonly summary: string | null;
    readonly heroImage: {
        readonly storage: AttachmentStorage | null;
        readonly image: {
            readonly webp: {
                readonly url: string | null;
                readonly width: number | null;
                readonly height: number | null;
            };
        };
        readonly placeholder: {
            readonly webp: {
                readonly url: string | null;
            };
        };
    };
    readonly heroImageLayout: HeroImageLayout;
    readonly " $refType": "CommunityHeroFragment";
};
export type CommunityHeroFragment$data = CommunityHeroFragment;
export type CommunityHeroFragment$key = {
    readonly " $data"?: CommunityHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityHeroFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityHeroFragment",
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
          "alias": "image",
          "args": null,
          "concreteType": "ImageSize",
          "kind": "LinkedField",
          "name": "hero",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageDerivative",
              "kind": "LinkedField",
              "name": "webp",
              "plural": false,
              "selections": [
                (v0/*: any*/),
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
          "storageKey": null
        },
        {
          "alias": "placeholder",
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
              "name": "webp",
              "plural": false,
              "selections": [
                (v0/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "heroImageLayout",
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
})();
(node as any).hash = '965c10c1e715d21fc156aff05ad5a316';
export default node;
