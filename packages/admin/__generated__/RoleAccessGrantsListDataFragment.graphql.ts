/**
 * @generated SignedSource<<4cd8c3471e8f9149fc3f43adf8eed869>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoleAccessGrantsListDataFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly entity?: {
        readonly id: string;
      };
      readonly id?: string;
      readonly role?: {
        readonly id: string;
        readonly name: string;
      };
      readonly slug?: string;
      readonly user?: {
        readonly email: string | null | undefined;
        readonly id: string;
        readonly name: string | null | undefined;
        readonly slug: string;
        readonly " $fragmentSpreads": FragmentRefs<"UserNameColumnFragment">;
      };
    };
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "RoleAccessGrantsListDataFragment";
};
export type RoleAccessGrantsListDataFragment$key = {
  readonly " $data"?: RoleAccessGrantsListDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoleAccessGrantsListDataFragment">;
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
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "UserNameColumnFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "UserNameColumnCellFragment"
        }
      ],
      "args": null,
      "argumentDefinitions": ([]/*: any*/)
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

(node as any).hash = "7eeb220ce1171cacc9d25d1f0b0591c0";

export default node;
