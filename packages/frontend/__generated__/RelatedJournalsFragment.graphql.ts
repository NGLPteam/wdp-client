/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RelatedJournalsFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly target: {
                readonly __typename: "Collection";
                readonly title: string;
                readonly slug: string;
                readonly published: {
                    readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
                };
                readonly thumbnail: {
                    readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
                } | null;
            } | {
                readonly __typename: "Item";
                readonly title: string;
                readonly slug: string;
                readonly published: {
                    readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
                };
                readonly thumbnail: {
                    readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
                } | null;
            } | {
                /*This will never be '%other', but we need some
                value in case none of the concrete values match.*/
                readonly __typename: "%other";
            };
        };
    }>;
    readonly " $refType": "RelatedJournalsFragment";
};
export type RelatedJournalsFragment$data = RelatedJournalsFragment;
export type RelatedJournalsFragment$key = {
    readonly " $data"?: RelatedJournalsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RelatedJournalsFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  },
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
    "concreteType": "VariablePrecisionDate",
    "kind": "LinkedField",
    "name": "published",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "PrecisionDateFragment"
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "AssetPreview",
    "kind": "LinkedField",
    "name": "thumbnail",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CoverImageFragment"
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelatedJournalsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "EntityLinkEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "EntityLink",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "target",
              "plural": false,
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
                  "type": "Item",
                  "abstractKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "EntityLinkConnection",
  "abstractKey": null
};
})();
(node as any).hash = 'eb1fbc25e6dae5ff00299eb75dcae358';
export default node;
