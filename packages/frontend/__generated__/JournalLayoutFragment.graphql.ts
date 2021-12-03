/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalLayoutFragment = {
    readonly related: {
        readonly " $fragmentRefs": FragmentRefs<"RelatedJournalsFragment">;
    };
    readonly issues: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedIssuesFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"JournalHeroFragment" | "JournalNavBarFragment" | "JournalInfoFragment" | "BreadcrumbsBarFragment">;
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
      "alias": "related",
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
          "name": "RelatedJournalsFragment"
        }
      ],
      "storageKey": "links(order:\"RECENT\",perPage:4)"
    },
    {
      "alias": "issues",
      "args": [
        {
          "kind": "Literal",
          "name": "nodeFilter",
          "value": "DESCENDANTS"
        },
        {
          "kind": "Literal",
          "name": "order",
          "value": "PUBLISHED_ASCENDING"
        },
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:journal_issue"
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
          "name": "FeaturedIssuesFragment"
        }
      ],
      "storageKey": "collections(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_ASCENDING\",perPage:4,schema:\"nglp:journal_issue\")"
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
      "name": "JournalInfoFragment"
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
(node as any).hash = 'd932c4e5c8ce25adb45dd3aa15fcc08c';
export default node;
