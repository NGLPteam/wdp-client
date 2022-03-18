/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLandingLayoutFragment = {
    readonly featuredJournals: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedJournalsFragment">;
    } | null;
    readonly featuredSeries: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedCollectionsGridFragment">;
    } | null;
    readonly featuredIssue: {
        readonly entity?: {
            readonly " $fragmentRefs": FragmentRefs<"FeaturedIssueFragment">;
        } | null | undefined;
    } | null;
    readonly featuredUnits: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedUnitsFragment">;
    } | null;
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
      "alias": "featuredSeries",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "featured.series"
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
          "name": "FeaturedCollectionsGridFragment"
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"featured.series\")"
    },
    {
      "alias": "featuredIssue",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "featured.issue"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "entity",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "FeaturedIssueFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "type": "EntityProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"featured.issue\")"
    },
    {
      "alias": "featuredUnits",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "featured.units"
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
          "name": "FeaturedUnitsFragment"
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"featured.units\")"
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
(node as any).hash = 'eb40bd5390c1e966851eb35f6874af81';
export default node;
