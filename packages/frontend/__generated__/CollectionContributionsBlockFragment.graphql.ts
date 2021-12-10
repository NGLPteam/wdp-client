/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type CollectionContributionsBlockFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly slug: string;
            readonly contributor: {
                readonly image?: {
                    readonly storage: AttachmentStorage | null;
                } | undefined;
            };
            readonly " $fragmentRefs": FragmentRefs<"ContributionBlockItemFragment">;
        };
    }>;
    readonly " $refType": "CollectionContributionsBlockFragment";
};
export type CollectionContributionsBlockFragment$data = CollectionContributionsBlockFragment;
export type CollectionContributionsBlockFragment$key = {
    readonly " $data"?: CollectionContributionsBlockFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionContributionsBlockFragment">;
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
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionContributionsBlockFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionContributionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CollectionContribution",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
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
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CollectionContributionConnection",
  "abstractKey": null
};
})();
(node as any).hash = '7ace5a6b732fbaf2f0390b17360c6964';
export default node;
