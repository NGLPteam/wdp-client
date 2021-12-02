/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalLayoutFragment = {
    readonly links: {
        readonly " $fragmentRefs": FragmentRefs<"RelatedEntitiesFragment">;
    };
    readonly issues: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedIssuesFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"JournalHeroFragment" | "JournalNavBarFragment" | "BreadcrumbsBarFragment">;
    readonly " $refType": "JournalLayoutFragment";
};
export type JournalLayoutFragment$data = JournalLayoutFragment;
export type JournalLayoutFragment$key = {
    readonly " $data"?: JournalLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"JournalLayoutFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "perPage",
  "value": 4
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "order",
          "value": "RECENT"
        },
        (v0/*: any*/)
      ],
      "concreteType": "EntityLinkConnection",
      "kind": "LinkedField",
      "name": "links",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RelatedEntitiesFragment"
        }
      ],
      "storageKey": "links(order:\"RECENT\",perPage:4)"
    },
    {
      "alias": "issues",
      "args": [
        {
          "kind": "Literal",
          "name": "order",
          "value": "PUBLISHED_ASCENDING"
        },
        (v0/*: any*/)
      ],
      "concreteType": "CollectionConnection",
      "kind": "LinkedField",
      "name": "collections",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FeaturedIssuesFragment"
        }
      ],
      "storageKey": "collections(order:\"PUBLISHED_ASCENDING\",perPage:4)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JournalHeroFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JournalNavBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsBarFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
})();
(node as any).hash = 'b4a2255192d862124da863a08a44ca05';
export default node;
