/**
 * @generated SignedSource<<25ff48922227f93f84527f5835c973b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserNameColumnCellFragment$data = {
  readonly name: string | null | undefined;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"UserAvatarFragment">;
  readonly " $fragmentType": "UserNameColumnCellFragment";
};
export type UserNameColumnCellFragment$key = {
  readonly " $data"?: UserNameColumnCellFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserNameColumnCellFragment">;
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

(node as any).hash = "72cd7641d658c0f8b1f058abccee3d31";

export default node;
