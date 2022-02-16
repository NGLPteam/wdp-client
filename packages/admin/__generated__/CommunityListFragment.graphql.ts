/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly slug: string;
            readonly id: string;
            readonly createdAt: string;
            readonly updatedAt: string;
            readonly name: string;
            readonly " $fragmentRefs": FragmentRefs<"CommunityNameColumnFragment" | "CommunityThumbnailColumnFragment">;
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "CommunityListFragment";
};
export type CommunityListFragment$data = CommunityListFragment;
export type CommunityListFragment$key = {
    readonly " $data"?: CommunityListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CommunityEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Community",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            },
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
              "name": "createdAt",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "updatedAt",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "CommunityNameColumnFragment"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "CommunityThumbnailColumnFragment"
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
  "type": "CommunityConnection",
  "abstractKey": null
};
(node as any).hash = '2067a289f132105bae211764bd288627';
export default node;
