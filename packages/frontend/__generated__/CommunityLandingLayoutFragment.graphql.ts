/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLandingLayoutFragment = {
    readonly featuredJournals: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedJournalsFragment">;
    } | null;
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



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLandingLayoutFragment",
  "selections": [
    {
      "alias": "featuredJournals",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "featured.journals"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FeaturedJournalsFragment"
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"featured.journals\")"
    },
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
          "name": "page",
          "value": 1
        },
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
(node as any).hash = '9bafd2ab6b4bb96da5ff32fcec9f3314';
export default node;
