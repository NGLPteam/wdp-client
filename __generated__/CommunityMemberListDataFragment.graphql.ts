/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommunityMemberListDataFragment = {
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
    readonly " $refType": "CommunityMemberListDataFragment";
};
export type CommunityMemberListDataFragment$data = CommunityMemberListDataFragment;
export type CommunityMemberListDataFragment$key = {
    readonly " $data"?: CommunityMemberListDataFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"CommunityMemberListDataFragment">;
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
  "name": "CommunityMemberListDataFragment",
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
(node as any).hash = '82337c76a9204026f8892793a5c8a16c';
export default node;
