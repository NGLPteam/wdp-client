/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueLayoutFragment = {
    readonly contributions: {
        readonly " $fragmentRefs": FragmentRefs<"CollectionContributionsBlockFragment">;
    };
    readonly relatedCollections: {
        readonly " $fragmentRefs": FragmentRefs<"RelatedIssuesFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"EntityHTMLHeadFragment" | "BreadcrumbsBarFragment" | "IssueHeroFragment">;
    readonly " $refType": "IssueLayoutFragment";
};
export type IssueLayoutFragment$data = IssueLayoutFragment;
export type IssueLayoutFragment$key = {
    readonly " $data"?: IssueLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueLayoutFragment",
  "selections": [
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
          "name": "CollectionContributionsBlockFragment"
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityHTMLHeadFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "IssueHeroFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '3a181a47ea68c730601d9bd4351bd828';
export default node;
