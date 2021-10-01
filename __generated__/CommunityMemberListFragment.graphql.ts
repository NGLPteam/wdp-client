/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommunityMemberListFragment = {
    readonly allowedActions: ReadonlyArray<string>;
    readonly assignedUsers: {
        readonly " $fragmentRefs": FragmentRefs<"CommunityMemberListDataFragment">;
    };
    readonly " $refType": "CommunityMemberListFragment";
};
export type CommunityMemberListFragment$data = CommunityMemberListFragment;
export type CommunityMemberListFragment$key = {
    readonly " $data"?: CommunityMemberListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"CommunityMemberListFragment">;
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
  "name": "CommunityMemberListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "allowedActions",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "order",
          "value": "USER_NAME_ASC"
        },
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
      "concreteType": "ContextualPermissionConnection",
      "kind": "LinkedField",
      "name": "assignedUsers",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CommunityMemberListDataFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
(node as any).hash = '9abce8b957bc9e5b07cdfedaa2ab4884';
export default node;
