/**
 * @generated SignedSource<<97b9dd0029fec84c58e55f7a32846dcf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ContributionsBlockFragment$data = {
  readonly nodes?: ReadonlyArray<{
    readonly contributor: {
      readonly image?: {
        readonly storage: AttachmentStorage | null | undefined;
      };
    };
    readonly role: string | null | undefined;
    readonly slug: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContributionBlockItemFragment">;
  }>;
  readonly " $fragmentType": "ContributionsBlockFragment";
};
export type ContributionsBlockFragment$key = {
  readonly " $data"?: ContributionsBlockFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributionsBlockFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "image",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "storage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "role",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      {
        "kind": "InlineFragment",
        "selections": (v0/*: any*/),
        "type": "PersonContributor",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v0/*: any*/),
        "type": "OrganizationContributor",
        "abstractKey": null
      }
    ],
    "storageKey": null
  },
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ContributionBlockItemFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionsBlockFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemContribution",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "type": "ItemContributionConnection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CollectionContribution",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "type": "CollectionContributionConnection",
      "abstractKey": null
    }
  ],
  "type": "Paginated",
  "abstractKey": "__isPaginated"
};
})();

(node as any).hash = "e3267af377d0d3b1185634c96ae5dcdc";

export default node;
