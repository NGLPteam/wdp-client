/**
 * @generated SignedSource<<762c78c4f13a448c9e70ac05d4e3b892>>
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

(node as any).hash = "008778159ecdd2cd3c27131f2997ce46";

export default node;
