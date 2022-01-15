/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLandingLayoutFragment = {
    readonly journals: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedJournalsFragment">;
    };
    readonly collections: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
        readonly " $fragmentRefs": FragmentRefs<"FeaturedCollectionsListFragment" | "FeaturedCollectionsGridFragment">;
    };
    readonly descendants: {
        readonly " $fragmentRefs": FragmentRefs<"UnitListFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"CommunityHeroFragment">;
    readonly " $refType": "CommunityLandingLayoutFragment";
};
export type CommunityLandingLayoutFragment$data = CommunityLandingLayoutFragment;
export type CommunityLandingLayoutFragment$key = {
    readonly " $data"?: CommunityLandingLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLandingLayoutFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "order",
  "value": "RECENT"
},
v1 = {
  "kind": "Literal",
  "name": "page",
  "value": 1
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLandingLayoutFragment",
  "selections": [
    {
      "alias": "journals",
      "args": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 5
        },
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:journal"
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
          "name": "FeaturedJournalsFragment"
        }
      ],
      "storageKey": "collections(order:\"RECENT\",page:1,perPage:5,schema:\"nglp:journal\")"
    },
    {
      "alias": null,
      "args": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 8
        },
        {
          "kind": "Literal",
          "name": "schema",
          "value": "default:collection"
        }
      ],
      "concreteType": "CollectionConnection",
      "kind": "LinkedField",
      "name": "collections",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalCount",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FeaturedCollectionsListFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FeaturedCollectionsGridFragment"
        }
      ],
      "storageKey": "collections(order:\"RECENT\",page:1,perPage:8,schema:\"default:collection\")"
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "order",
          "value": "TITLE_ASCENDING"
        },
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:unit"
        }
      ],
      "concreteType": "EntityDescendantConnection",
      "kind": "LinkedField",
      "name": "descendants",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "UnitListFragment"
        }
      ],
      "storageKey": "descendants(order:\"TITLE_ASCENDING\",schema:\"nglp:unit\")"
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
})();
(node as any).hash = '715d7c928f45c46235372fd371be6e5c';
export default node;
