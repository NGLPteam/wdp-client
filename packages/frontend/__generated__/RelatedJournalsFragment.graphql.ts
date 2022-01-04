/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type RelatedJournalsFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly target: {
                readonly __typename: "Collection";
                readonly id: string;
                readonly title: string;
                readonly slug: string;
                readonly published: {
                    readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
                };
                readonly thumbnail: {
                    readonly storage: AttachmentStorage | null;
                    readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
                };
            } | {
                readonly __typename: "Item";
                readonly id: string;
                readonly title: string;
                readonly slug: string;
                readonly published: {
                    readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
                };
                readonly thumbnail: {
                    readonly storage: AttachmentStorage | null;
                    readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
                };
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
    "name": "id",
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
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "thumbnail",
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
(node as any).hash = '8175b4b64de5e7c3f398f22d5a6819e5';
export default node;
