/**
 * @generated SignedSource<<17036e9ae7d031d63aca7e2ee8cf06a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityListFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly allowedActions: ReadonlyArray<string>;
      readonly createdAt: string;
      readonly id: string;
      readonly name: string;
      readonly position: number | null | undefined;
      readonly slug: string;
      readonly updatedAt: string;
      readonly " $fragmentSpreads": FragmentRefs<"CommunityNameColumnFragment">;
    };
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "CommunityListFragment";
};
export type CommunityListFragment$key = {
  readonly " $data"?: CommunityListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
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
            (v0/*: any*/),
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
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "allowedActions",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "position",
              "storageKey": null
            },
            {
              "kind": "InlineDataFragmentSpread",
              "name": "CommunityNameColumnFragment",
              "selections": [
                (v1/*: any*/),
                (v0/*: any*/)
              ],
              "args": null,
              "argumentDefinitions": []
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
})();

(node as any).hash = "cc27900d4befec6d8dc73111206a4f2e";

export default node;
