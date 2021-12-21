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
    readonly currentIssue: {
        readonly " $fragmentRefs": FragmentRefs<"CurrentIssueFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"EntityHTMLHeadFragment" | "JournalHeroFragment" | "EntityNavBarFragment" | "BreadcrumbsBarFragment">;
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
},
v1 = {
  "kind": "Literal",
  "name": "nodeFilter",
  "value": "DESCENDANTS"
},
v2 = {
  "kind": "Literal",
  "name": "schema",
  "value": "nglp:journal_issue"
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
        (v1/*: any*/),
        {
          "kind": "Literal",
          "name": "order",
          "value": "PUBLISHED_ASCENDING"
        },
        {
          "kind": "Literal",
          "name": "page",
          "value": 1
        },
        (v0/*: any*/),
        (v2/*: any*/)
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
      "storageKey": "collections(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_ASCENDING\",page:1,perPage:4,schema:\"nglp:journal_issue\")"
    },
    {
      "alias": "currentIssue",
      "args": [
        (v1/*: any*/),
        {
          "kind": "Literal",
          "name": "order",
          "value": "PUBLISHED_DESCENDING"
        },
        (v2/*: any*/)
      ],
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "firstCollection",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CurrentIssueFragment"
        }
      ],
      "storageKey": "firstCollection(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",schema:\"nglp:journal_issue\")"
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
})();
(node as any).hash = 'a4a78bad2f3e78bbd3e7040dd90f1eaf';
export default node;
