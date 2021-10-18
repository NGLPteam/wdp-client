/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoleAccessGrantsListDataFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id?: string;
            readonly slug?: string;
            readonly role?: {
                readonly id: string;
                readonly name: string;
            };
            readonly user?: {
                readonly id: string;
                readonly slug: string;
                readonly name: string | null;
                readonly email: string | null;
            };
            readonly entity?: {
                readonly id: string;
            };
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "RoleAccessGrantsListDataFragment";
};
export type RoleAccessGrantsListDataFragment$data = RoleAccessGrantsListDataFragment;
export type RoleAccessGrantsListDataFragment$key = {
    readonly " $data"?: RoleAccessGrantsListDataFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"RoleAccessGrantsListDataFragment">;
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
v3 = {
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
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v0/*: any*/),
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
},
v5 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleAccessGrantsListDataFragment",
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
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
                (v3/*: any*/),
                (v4/*: any*/),
                {
                  "alias": "entity",
                  "args": null,
                  "concreteType": "Collection",
                  "kind": "LinkedField",
                  "name": "collection",
                  "plural": false,
                  "selections": (v5/*: any*/),
                  "storageKey": null
                }
              ],
              "type": "UserCollectionAccessGrant",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
                (v3/*: any*/),
                (v4/*: any*/),
                {
                  "alias": "entity",
                  "args": null,
                  "concreteType": "Item",
                  "kind": "LinkedField",
                  "name": "item",
                  "plural": false,
                  "selections": (v5/*: any*/),
                  "storageKey": null
                }
              ],
              "type": "UserItemAccessGrant",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
                (v3/*: any*/),
                (v4/*: any*/),
                {
                  "alias": "entity",
                  "args": null,
                  "concreteType": "Community",
                  "kind": "LinkedField",
                  "name": "community",
                  "plural": false,
                  "selections": (v5/*: any*/),
                  "storageKey": null
                }
              ],
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
(node as any).hash = 'bdb9dcd2e3b7da0e8da90305f2946c47';
export default node;
