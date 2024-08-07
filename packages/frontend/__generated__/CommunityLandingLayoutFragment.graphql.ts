/**
 * @generated SignedSource<<689d06003073c97ae21195641d8c6a92>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityLandingLayoutFragment$data = {
  readonly featuredIssue: {
    readonly entity?: {
      readonly " $fragmentSpreads": FragmentRefs<"FeaturedIssueFragment">;
    } | null | undefined;
  } | null | undefined;
  readonly featuredJournals: {
    readonly " $fragmentSpreads": FragmentRefs<"FeaturedJournalsFragment">;
  } | null | undefined;
  readonly featuredSeries: {
    readonly " $fragmentSpreads": FragmentRefs<"FeaturedCollectionsGridFragment">;
  } | null | undefined;
  readonly featuredUnits: {
    readonly " $fragmentSpreads": FragmentRefs<"FeaturedUnitsFragment">;
  } | null | undefined;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityHeroFragment">;
  readonly " $fragmentType": "CommunityLandingLayoutFragment";
};
export type CommunityLandingLayoutFragment$key = {
  readonly " $data"?: CommunityLandingLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityLandingLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLandingLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityHeroFragment"
    },
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
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "753d97fd5b4d22c2ae3963eabd70bf9c";

export default node;
