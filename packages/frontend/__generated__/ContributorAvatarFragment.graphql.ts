/**
 * @generated SignedSource<<b003ddbb22b6fb6e2c975b9ea8c23ea0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorAvatarFragment$data = {
  readonly small: {
    readonly webp: {
      readonly alt: string | null;
      readonly url: string | null;
    };
  };
  readonly " $fragmentType": "ContributorAvatarFragment";
};
export type ContributorAvatarFragment$key = {
  readonly " $data"?: ContributorAvatarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorAvatarFragment">;
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

(node as any).hash = "239cd68c87a078490b100710e75c17de";

export default node;
