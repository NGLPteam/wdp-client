/**
 * @generated SignedSource<<3dca884104b6d4989fea1b3db1880e9b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JournalContentFragment$data = {
  readonly about: {
    readonly content?: string | null;
  } | null;
  readonly announcements: {
    readonly nodes: ReadonlyArray<{
      readonly slug: String;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementsFragment">;
  };
  readonly currentIssue: {
    readonly " $fragmentSpreads": FragmentRefs<"FeaturedIssueFragment">;
  } | null;
  readonly description: {
    readonly fullText?: {
      readonly content: string | null;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"FullTextFragment">;
  } | null;
  readonly issues: {
    readonly " $fragmentSpreads": FragmentRefs<"RecentIssuesFragment">;
  };
  readonly slug: String;
  readonly " $fragmentType": "JournalContentFragment";
};
export type JournalContentFragment$key = {
  readonly " $data"?: JournalContentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"JournalContentFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "content",
    "storageKey": null
  }
],
v2 = {
  "kind": "Literal",
  "name": "nodeFilter",
  "value": "DESCENDANTS"
},
v3 = {
  "kind": "Literal",
  "name": "order",
  "value": "PUBLISHED_DESCENDING"
},
v4 = {
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
    (v0/*: any*/),
    {
      "alias": "description",
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
              "selections": (v1/*: any*/),
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
      "alias": "about",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "about"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": (v1/*: any*/),
          "type": "MarkdownProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"about\")"
    },
    {
      "alias": "issues",
      "args": [
        (v2/*: any*/),
        (v3/*: any*/),
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
        (v4/*: any*/)
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
        (v2/*: any*/),
        (v3/*: any*/),
        (v4/*: any*/)
      ],
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "firstCollection",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FeaturedIssueFragment"
        }
      ],
      "storageKey": "firstCollection(nodeFilter:\"DESCENDANTS\",order:\"PUBLISHED_DESCENDING\",schema:\"nglp:journal_issue\")"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AnnouncementConnection",
      "kind": "LinkedField",
      "name": "announcements",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityAnnouncementsFragment"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Announcement",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
})();

(node as any).hash = "18066e08ec3a3014af52698d045a8acf";

export default node;
