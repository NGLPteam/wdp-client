/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalLayoutFragment = {
    readonly related: {
        readonly " $fragmentRefs": FragmentRefs<"RelatedJournalsFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"EntityHTMLHeadFragment" | "JournalHeroFragment" | "EntityNavBarFragment" | "BreadcrumbsBarFragment">;
    readonly " $refType": "JournalLayoutFragment";
};
export type JournalLayoutFragment$data = JournalLayoutFragment;
export type JournalLayoutFragment$key = {
    readonly " $data"?: JournalLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"JournalLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalLayoutFragment",
  "selections": [
    {
      "alias": "related",
      "args": [
        {
          "kind": "Literal",
          "name": "order",
          "value": "RECENT"
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
          "name": "RelatedJournalsFragment"
        }
      ],
      "storageKey": "relatedCollections(order:\"RECENT\",perPage:4)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityHTMLHeadFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JournalHeroFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityNavBarFragment"
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
(node as any).hash = '64bd0d24e92c0ed6cdfc9830991ca283';
export default node;
