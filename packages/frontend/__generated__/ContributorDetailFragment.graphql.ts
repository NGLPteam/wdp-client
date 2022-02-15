/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type ContributorDetailFragment = {
    readonly bio: string | null;
    readonly orcid: string | null;
    readonly collectionContributions: {
        readonly nodes: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"ContributionSummaryFragment">;
        }>;
    };
    readonly itemContributions: {
        readonly nodes: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"ContributionSummaryFragment">;
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
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ContributionSummaryFragment"
  }
],
v1 = {
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
      "name": "orcid",
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
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
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
          "selections": (v0/*: any*/),
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
        (v1/*: any*/),
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
        (v1/*: any*/)
      ],
      "type": "PersonContributor",
      "abstractKey": null
    }
  ],
  "type": "Contributor",
  "abstractKey": "__isContributor"
};
})();
(node as any).hash = '6f7ffe15cc20c4088a77520084f0bc56';
export default node;
