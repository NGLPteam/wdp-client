/**
 * @generated SignedSource<<6993ced5c023d8d61b5e4f0e54af09ed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JournalLayoutFragment$data = {
  readonly related: {
    readonly " $fragmentSpreads": FragmentRefs<"RelatedJournalsFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment" | "EntityNavBarFragment" | "JournalHeroFragment">;
  readonly " $fragmentType": "JournalLayoutFragment";
};
export type JournalLayoutFragment$key = {
  readonly " $data"?: JournalLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"JournalLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalLayoutFragment",
  "selections": [
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
    },
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
    }
  ],
  "type": "Collection",
  "abstractKey": null
};

(node as any).hash = "ea54fdeb7b8c9cc13461ea332773f7a3";

export default node;
