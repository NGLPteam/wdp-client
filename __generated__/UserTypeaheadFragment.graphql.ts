/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserTypeaheadFragment = {
    readonly users: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string | null;
            };
        }>;
    };
    readonly " $refType": "UserTypeaheadFragment";
};
export type UserTypeaheadFragment$data = UserTypeaheadFragment;
export type UserTypeaheadFragment$key = {
    readonly " $data"?: UserTypeaheadFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"UserTypeaheadFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserTypeaheadFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserConnection",
      "kind": "LinkedField",
      "name": "users",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "UserEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "User",
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
                  "kind": "ScalarField",
                  "name": "name",
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '86ff2dfc0b84abe9a361d96327c815f9';
export default node;
