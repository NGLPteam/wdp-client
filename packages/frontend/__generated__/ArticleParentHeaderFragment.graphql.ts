/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleParentHeaderFragment = {
    readonly journal?: {
        readonly title?: string | undefined;
    } | null | undefined;
    readonly volume?: {
        readonly title?: string | undefined;
    } | null | undefined;
    readonly issue?: {
        readonly title?: string | undefined;
    } | null | undefined;
    readonly unit?: {
        readonly title?: string | undefined;
    } | null | undefined;
    readonly series?: {
        readonly title?: string | undefined;
    } | null | undefined;
    readonly campus?: {
        readonly title?: string | undefined;
    } | null | undefined;
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
],
v1 = {
  "alias": "unit",
  "args": [
    {
      "kind": "Literal",
      "name": "schema",
      "value": "nglp:unit"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v0/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:unit\")"
},
v2 = {
  "alias": "campus",
  "args": [
    {
      "kind": "Literal",
      "name": "schema",
      "value": "nglp:campus"
    }
  ],
  "concreteType": null,
  "kind": "LinkedField",
  "name": "ancestorOfType",
  "plural": false,
  "selections": (v0/*: any*/),
  "storageKey": "ancestorOfType(schema:\"nglp:campus\")"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleParentHeaderFragment",
  "selections": [
    {
      "kind": "InlineFragment",
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
        },
        (v1/*: any*/),
        {
          "alias": "series",
          "args": [
            {
              "kind": "Literal",
              "name": "schema",
              "value": "nglp:series"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "ancestorOfType",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": "ancestorOfType(schema:\"nglp:series\")"
        },
        (v2/*: any*/)
      ],
      "type": "Item",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v1/*: any*/),
        (v2/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};
})();
(node as any).hash = '3a767157fb0e0c58828e9a0dcae64c3d';
export default node;
