/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLandingLayoutFragment = {
    readonly collections: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedCollectionsFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"CommunityHeroFragment">;
    readonly " $refType": "CommunityLandingLayoutFragment";
};
export type CommunityLandingLayoutFragment$data = CommunityLandingLayoutFragment;
export type CommunityLandingLayoutFragment$key = {
    readonly " $data"?: CommunityLandingLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLandingLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLandingLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "order",
          "value": "RECENT"
        },
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 5
        }
      ],
      "concreteType": "CollectionConnection",
      "kind": "LinkedField",
      "name": "collections",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FeaturedCollectionsFragment"
        }
      ],
      "storageKey": "collections(order:\"RECENT\",perPage:5)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityHeroFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = 'f085d3b48b501faf95cba8d94334c67f';
export default node;
