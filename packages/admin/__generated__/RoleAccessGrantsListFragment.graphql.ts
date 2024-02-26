/**
 * @generated SignedSource<<5500dd8b01a7f62ea3a48de86fa6faaf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoleAccessGrantsListFragment$data = {
  readonly allAccessGrants: {
    readonly " $fragmentSpreads": FragmentRefs<"RoleAccessGrantsListDataFragment">;
  };
  readonly " $fragmentType": "RoleAccessGrantsListFragment";
};
export type RoleAccessGrantsListFragment$key = {
  readonly " $data"?: RoleAccessGrantsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoleAccessGrantsListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleAccessGrantsListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page"
        },
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 20
        }
      ],
      "concreteType": "AnyAccessGrantConnection",
      "kind": "LinkedField",
      "name": "allAccessGrants",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RoleAccessGrantsListDataFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "2827f9762a2aa42b27b05ebea0e6608a";

export default node;
