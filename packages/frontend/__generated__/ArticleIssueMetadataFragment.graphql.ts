/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleIssueMetadataFragment = {
    readonly issueTitleMeta: {
        readonly content?: string | null | undefined;
    } | null;
    readonly issueNumber: {
        readonly content?: string | null | undefined;
    } | null;
    readonly firstPage: {
        readonly integerValue?: number | null | undefined;
    } | null;
    readonly lastPage: {
        readonly integerValue?: number | null | undefined;
    } | null;
    readonly " $refType": "ArticleIssueMetadataFragment";
};
export type ArticleIssueMetadataFragment$data = ArticleIssueMetadataFragment;
export type ArticleIssueMetadataFragment$key = {
    readonly " $data"?: ArticleIssueMetadataFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleIssueMetadataFragment">;
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
        "name": "content",
        "storageKey": null
      }
    ],
    "type": "StringProperty",
    "abstractKey": null
  }
],
v1 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "integerValue",
        "storageKey": null
      }
    ],
    "type": "IntegerProperty",
    "abstractKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleIssueMetadataFragment",
  "selections": [
    {
      "alias": "issueTitleMeta",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "issue.title"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"issue.title\")"
    },
    {
      "alias": "issueNumber",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "issue.number"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"issue.number\")"
    },
    {
      "alias": "firstPage",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "issue.fpage"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"issue.fpage\")"
    },
    {
      "alias": "lastPage",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "issue.lpage"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "schemaProperty(fullPath:\"issue.lpage\")"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();
(node as any).hash = 'f2b94729e4e9044a586c6f7f495a302d';
export default node;
