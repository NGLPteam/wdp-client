/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserNameColumnCellFragment = {
    readonly name: string | null;
    readonly slug: string;
    readonly " $fragmentRefs": FragmentRefs<"UserAvatarFragment">;
    readonly " $refType": "UserNameColumnCellFragment";
};
export type UserNameColumnCellFragment$data = UserNameColumnCellFragment;
export type UserNameColumnCellFragment$key = {
    readonly " $data"?: UserNameColumnCellFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"UserNameColumnCellFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserNameColumnCellFragment",
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
      "name": "slug",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "UserAvatarFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '72cd7641d658c0f8b1f058abccee3d31';
export default node;
