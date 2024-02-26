/**
 * @generated SignedSource<<ce159f8deb3387420707c21a80573ba3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type AvatarFragment$data = {
  readonly small: {
    readonly webp: {
      readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
    };
  };
  readonly storage: AttachmentStorage | null | undefined;
  readonly " $fragmentType": "AvatarFragment";
};
export type AvatarFragment$key = {
  readonly " $data"?: AvatarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AvatarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AvatarFragment",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "ImageFragment"
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

(node as any).hash = "6be8caa5ac409394435a9dffe1878d1d";

export default node;
