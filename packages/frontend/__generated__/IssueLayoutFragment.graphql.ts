/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueLayoutFragment = {
    readonly contributions: {
        readonly " $fragmentRefs": FragmentRefs<"CollectionContributionsBlockFragment">;
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
(node as any).hash = 'f74a64cf268b5208c65fa013f4a37860';
export default node;
