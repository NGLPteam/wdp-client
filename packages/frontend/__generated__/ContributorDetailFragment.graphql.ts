/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type ContributorDetailFragment = {
    readonly bio: string | null;
    readonly collectionContributionCount: number;
    readonly collectionContributions: {
        readonly nodes: ReadonlyArray<{
            readonly role: string | null;
            readonly collection: {
                readonly " $fragmentRefs": FragmentRefs<"EntitySummaryFragment">;
            };
        }>;
    };
    readonly itemContributionCount: number;
    readonly itemContributions: {
        readonly nodes: ReadonlyArray<{
            readonly role: string | null;
            readonly item: {
                readonly " $fragmentRefs": FragmentRefs<"EntitySummaryFragment">;
            };
        }>;
    };
    readonly image: {
        readonly storage: AttachmentStorage | null;
        readonly " $fragmentRefs": FragmentRefs<"ContributorAvatarFragment">;
    };
    readonly links: ReadonlyArray<{
        readonly title: string;
        readonly url: string;
    }>;
    readonly affiliation?: string | null | undefined;
    readonly title?: string | null | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorNameFragment">;
    readonly " $refType": "ContributorDetailFragment";
};
export type ContributorDetailFragment$data = ContributorDetailFragment;
export type ContributorDetailFragment$key = {
    readonly " $data"?: ContributorDetailFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorDetailFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v1 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "EntitySummaryFragment"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorDetailFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "collectionContributionCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionContributionConnection",
      "kind": "LinkedField",
      "name": "collectionContributions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CollectionContribution",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Collection",
              "kind": "LinkedField",
              "name": "collection",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "itemContributionCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemContributionConnection",
      "kind": "LinkedField",
      "name": "itemContributions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemContribution",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Item",
              "kind": "LinkedField",
              "name": "item",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorAvatarFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ContributorLink",
      "kind": "LinkedField",
      "name": "links",
      "plural": true,
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContributorNameFragment"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "affiliation",
          "storageKey": null
        },
        (v2/*: any*/)
      ],
      "type": "PersonContributor",
      "abstractKey": null
    }
  ],
  "type": "Contributor",
  "abstractKey": "__isContributor"
};
})();
(node as any).hash = 'a81c67b0f33ad4fada99aee9c6db8c5f';
export default node;
