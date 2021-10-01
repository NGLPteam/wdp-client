/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoleListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly roles: ReadonlyArray<{
                readonly name: string;
            }>;
            readonly user: {
                readonly name: string | null;
                readonly email: string | null;
            };
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "RoleListFragment";
};
export type RoleListFragment$data = RoleListFragment;
export type RoleListFragment$key = {
    readonly " $data"?: RoleListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"RoleListFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
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
  "name": "RoleListFragment",
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Role",
              "kind": "LinkedField",
              "name": "roles",
              "plural": true,
              "selections": [
                (v0/*: any*/)
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
(node as any).hash = 'cdcd65dfa33c974d2a2f78d01d10c5ff';
export default node;
