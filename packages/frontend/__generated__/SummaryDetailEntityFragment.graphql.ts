/**
 * @generated SignedSource<<f93808a159b8270a371bbb9f1917abaa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SummaryDetailEntityFragment$data = {
  readonly announcements?: {
    readonly nodes: ReadonlyArray<{
      readonly slug: string;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"EntityAnnouncementsFragment">;
  };
  readonly " $fragmentType": "SummaryDetailEntityFragment";
};
export type SummaryDetailEntityFragment$key = {
  readonly " $data"?: SummaryDetailEntityFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SummaryDetailEntityFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SummaryDetailEntityFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Community",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();

(node as any).hash = "b1d1154b5dcaac350f76a66510da53b9";

export default node;
