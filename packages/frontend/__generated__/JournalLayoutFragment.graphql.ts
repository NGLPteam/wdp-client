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
    };
    readonly " $fragmentRefs": FragmentRefs<"EntityHTMLHeadFragment" | "JournalHeroFragment" | "JournalNavBarFragment" | "BreadcrumbsBarFragment">;
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
        (v1/*: any*/)
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
      "alias": "currentIssue",
      "args": [
        {
          "kind": "Literal",
          "name": "order",
          "value": "PUBLISHED_DESCENDING"
        },
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 1
        },
        (v1/*: any*/)
      ],
      "concreteType": "CollectionConnection",
      "kind": "LinkedField",
      "name": "collections",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CurrentIssueFragment"
        }
      ],
      "storageKey": "collections(order:\"PUBLISHED_DESCENDING\",perPage:1,schema:\"nglp:journal_issue\")"
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
(node as any).hash = '750d7b035f07bc67a84ab452e3d9845a';
export default node;
