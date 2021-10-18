/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoleAssignedUsersListDataFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly roles: ReadonlyArray<{
                readonly name: string;
            }>;
            readonly user: {
                readonly id: string;
                readonly name: string | null;
                readonly email: string | null;
                readonly slug: string;
            };
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "RoleAssignedUsersListDataFragment";
};
export type RoleAssignedUsersListDataFragment$data = RoleAssignedUsersListDataFragment;
export type RoleAssignedUsersListDataFragment$key = {
    readonly " $data"?: RoleAssignedUsersListDataFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"RoleAssignedUsersListDataFragment">;
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
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleAssignedUsersListDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ContextualPermissionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ContextualPermission",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Role",
              "kind": "LinkedField",
              "name": "roles",
              "plural": true,
              "selections": [
                (v1/*: any*/)
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
                (v0/*: any*/),
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "email",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "slug",
                  "storageKey": null
                }
              ],
              "storageKey": null
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
  "type": "ContextualPermissionConnection",
  "abstractKey": null
};
})();
(node as any).hash = '71ebfcb2ccd3e7764fcdcf95f35d09b5';
export default node;
