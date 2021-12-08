/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorAvatarFragment = {
    readonly alt: string;
    readonly small: {
        readonly webp: {
            readonly url: string;
        } | null;
    };
    readonly " $refType": "ContributorAvatarFragment";
};
export type ContributorAvatarFragment$data = ContributorAvatarFragment;
export type ContributorAvatarFragment$key = {
    readonly " $data"?: ContributorAvatarFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorAvatarFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorAvatarFragment",
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
      "concreteType": "PreviewImageMap",
      "kind": "LinkedField",
      "name": "small",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PreviewImage",
          "kind": "LinkedField",
          "name": "webp",
          "plural": false,
          "selections": [
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
  "type": "AssetPreview",
  "abstractKey": null
};
(node as any).hash = 'da6fd4408a62da9f3f723b6a156603a4';
export default node;
