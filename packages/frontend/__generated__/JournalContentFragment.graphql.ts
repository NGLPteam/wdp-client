/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalContentFragment = {
    readonly title: string;
    readonly about: {
        readonly fullText?: {
            readonly content: string | null;
        } | null | undefined;
        readonly " $fragmentRefs": FragmentRefs<"FullTextFragment">;
    } | null;
    readonly issues: {
        readonly " $fragmentRefs": FragmentRefs<"RecentIssuesFragment">;
    };
    readonly currentIssue: {
        readonly " $fragmentRefs": FragmentRefs<"CurrentIssueFragment">;
    } | null;
    readonly " $refType": "JournalContentFragment";
};
export type JournalContentFragment$data = JournalContentFragment;
export type JournalContentFragment$key = {
    readonly " $data"?: JournalContentFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"JournalContentFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "nodeFilter",
  "value": "DESCENDANTS"
},
v1 = {
  "kind": "Literal",
  "name": "order",
  "value": "PUBLISHED_DESCENDING"
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
  "name": "JournalContentFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": "about",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "description"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "FullText",
              "kind": "LinkedField",
              "name": "fullText",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "content",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "FullTextProperty",
          "abstractKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FullTextFragment"
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"description\")"
    },
    {
      "alias": "issues",
      "args": [
        (v0/*: any*/),
        (v1/*: any*/),
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
          "name": "RecentIssuesFragment"
        }
      ],
      "storageKey": "collections(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",page:1,perPage:4,schema:\"nglp:journal_issue\")"
    },
    {
      "alias": "currentIssue",
      "args": [
        (v0/*: any*/),
        (v1/*: any*/),
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
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
})();
(node as any).hash = 'ff35bc43672aec8aa44fa122515223eb';
export default node;
