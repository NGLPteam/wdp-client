/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoleAccessListDataFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id?: string;
            readonly slug?: string;
            readonly role?: {
                readonly id: string;
                readonly name: string;
            };
            readonly user?: {
                readonly slug: string;
                readonly name: string | null;
                readonly email: string | null;
            };
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "RoleAccessListDataFragment";
};
export type RoleAccessListDataFragment$data = RoleAccessListDataFragment;
export type RoleAccessListDataFragment$key = {
    readonly " $data"?: RoleAccessListDataFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"RoleAccessListDataFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v0/*: any*/),
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Role",
    "kind": "LinkedField",
    "name": "role",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleAccessListDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "AnyAccessGrantEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": (v3/*: any*/),
              "type": "UserCollectionAccessGrant",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": (v3/*: any*/),
              "type": "UserItemAccessGrant",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": (v3/*: any*/),
              "type": "UserCommunityAccessGrant",
              "abstractKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "AnyAccessGrantConnection",
  "abstractKey": null
};
})();
(node as any).hash = 'ccb9d372f5735a0fccb70f4fb0dc210f';
export default node;
