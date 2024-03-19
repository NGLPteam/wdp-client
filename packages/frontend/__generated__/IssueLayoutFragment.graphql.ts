/**
 * @generated SignedSource<<9afe963140870360a948fa859926ee6f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueLayoutFragment$data = {
  readonly contributions: {
    readonly pageInfo: {
      readonly totalCount: number;
    };
    readonly " $fragmentSpreads": FragmentRefs<"ContributionsBlockFragment">;
  };
  readonly relatedCollections: {
    readonly " $fragmentSpreads": FragmentRefs<"RelatedIssuesFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment" | "IssueHeroFragment">;
  readonly " $fragmentType": "IssueLayoutFragment";
};
export type IssueLayoutFragment$key = {
  readonly " $data"?: IssueLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "IssueHeroFragment"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionContributionConnection",
      "kind": "LinkedField",
      "name": "contributions",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributionsBlockFragment"
        },
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
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "page",
          "value": 1
        },
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 4
        }
      ],
      "concreteType": "CollectionConnection",
      "kind": "LinkedField",
      "name": "relatedCollections",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RelatedIssuesFragment"
        }
      ],
      "storageKey": "relatedCollections(page:1,perPage:4)"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};

(node as any).hash = "0c6d21c11508920579931ec021fe2c34";

export default node;
