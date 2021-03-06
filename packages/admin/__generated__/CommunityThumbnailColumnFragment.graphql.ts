/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type CommunityThumbnailColumnFragment = {
    readonly slug: string;
    readonly logo: {
        readonly storage: AttachmentStorage | null;
        readonly original: {
            readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
        };
    };
    readonly heroImage: {
        readonly storage: AttachmentStorage | null;
        readonly small: {
            readonly webp: {
                readonly " $fragmentRefs": FragmentRefs<"ImageFragment">;
            };
        };
    };
    readonly " $refType": "CommunityThumbnailColumnFragment";
};
export type CommunityThumbnailColumnFragment$data = CommunityThumbnailColumnFragment;
export type CommunityThumbnailColumnFragment$key = {
    readonly " $data"?: CommunityThumbnailColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityThumbnailColumnFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v1 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ImageFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityThumbnailColumnFragment",
  "selections": [
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageOriginal",
          "kind": "LinkedField",
          "name": "original",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageSize",
          "kind": "LinkedField",
          "name": "small",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageDerivative",
              "kind": "LinkedField",
              "name": "webp",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
})();
(node as any).hash = '38ca74abecf05ddd2f71350f992cf6e2';
export default node;
