/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalInfoFragment = {
    readonly title: string;
    readonly issues: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedIssuesFragment">;
    };
    readonly currentIssue: {
        readonly " $fragmentRefs": FragmentRefs<"CurrentIssueFragment">;
    } | null;
    readonly " $refType": "JournalInfoFragment";
};
export type JournalInfoFragment$data = JournalInfoFragment;
export type JournalInfoFragment$key = {
    readonly " $data"?: JournalInfoFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"JournalInfoFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "nodeFilter",
  "value": "DESCENDANTS"
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
  "name": "JournalInfoFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": "issues",
      "args": [
        (v0/*: any*/),
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
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 4
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
          "name": "FeaturedIssuesFragment"
        }
      ],
      "storageKey": "collections(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_ASCENDING\",page:1,perPage:4,schema:\"nglp:journal_issue\")"
    },
    {
      "alias": "currentIssue",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "order",
          "value": "PUBLISHED_DESCENDING"
        },
        (v1/*: any*/)
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
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
})();
(node as any).hash = '316c5e83f9624055a813d8e2601a5cb3';
export default node;
