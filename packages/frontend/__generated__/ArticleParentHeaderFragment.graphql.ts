/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleParentHeaderFragment = {
    readonly journal: {
        readonly title?: string | undefined;
    } | null;
    readonly volume: {
        readonly title?: string | undefined;
    } | null;
    readonly issue: {
        readonly title?: string | undefined;
    } | null;
    readonly " $refType": "ArticleParentHeaderFragment";
};
export type ArticleParentHeaderFragment$data = ArticleParentHeaderFragment;
export type ArticleParentHeaderFragment$key = {
    readonly " $data"?: ArticleParentHeaderFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleParentHeaderFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      }
    ],
    "type": "Entity",
    "abstractKey": "__isEntity"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleParentHeaderFragment",
  "selections": [
    {
      "alias": "journal",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:journal"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "ancestorOfType",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
    },
    {
      "alias": "volume",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:journal_volume"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "ancestorOfType",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "ancestorOfType(schema:\"nglp:journal_volume\")"
    },
    {
      "alias": "issue",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:journal_issue"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "ancestorOfType",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "ancestorOfType(schema:\"nglp:journal_issue\")"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();
(node as any).hash = '406b0b2daff224cf9611f94093a6d4f6';
export default node;
