/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorAvatarFragment = {
    readonly small: {
        readonly webp: {
            readonly alt: string | null;
            readonly url: string | null;
        };
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
(node as any).hash = '239cd68c87a078490b100710e75c17de';
export default node;
