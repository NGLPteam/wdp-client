/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserLayoutFragment = {
    readonly name: string | null;
    readonly email: string | null;
    readonly " $refType": "UserLayoutFragment";
};
export type UserLayoutFragment$data = UserLayoutFragment;
export type UserLayoutFragment$key = {
    readonly " $data"?: UserLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserLayoutFragment">;
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
(node as any).hash = '008778159ecdd2cd3c27131f2997ce46';
export default node;
