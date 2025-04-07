/**
 * @generated SignedSource<<b36913ebe4e773655912ba3ca15dab24>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserLayoutFragment$data = {
  readonly email: string | null | undefined;
  readonly id: string;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "UserLayoutFragment";
};
export type UserLayoutFragment$key = {
  readonly " $data"?: UserLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserLayoutFragment",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "3a04a83d724c67c48fe64331a2930ad4";

export default node;
