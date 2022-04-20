/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserUpdateFormFragment = {
    readonly id: string;
    readonly givenName: string | null;
    readonly familyName: string | null;
    readonly email: string | null;
    readonly username: string | null;
    readonly avatar: {
        readonly " $fragmentRefs": FragmentRefs<"FileUploadFragment">;
    };
    readonly " $refType": "UserUpdateFormFragment";
};
export type UserUpdateFormFragment$data = UserUpdateFormFragment;
export type UserUpdateFormFragment$key = {
    readonly " $data"?: UserUpdateFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserUpdateFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserUpdateFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
(node as any).hash = '8da8c65125ca612c84862d8166b27659';
export default node;
