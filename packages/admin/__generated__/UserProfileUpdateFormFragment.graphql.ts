/**
 * @generated SignedSource<<06a3490b0fff7498b8a8a5df2756e703>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserProfileUpdateFormFragment$data = {
  readonly avatar: {
    readonly " $fragmentSpreads": FragmentRefs<"FileUploadFragment">;
  };
  readonly email: string | null;
  readonly familyName: string | null;
  readonly givenName: string | null;
  readonly username: string | null;
  readonly " $fragmentType": "UserProfileUpdateFormFragment";
};
export type UserProfileUpdateFormFragment$key = {
  readonly " $data"?: UserProfileUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserProfileUpdateFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserProfileUpdateFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "givenName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "familyName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "avatar",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FileUploadFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "1bebca9c6f3efc1eed1deeb3f84e6192";

export default node;
