/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly __typename: "OrganizationContributor";
        readonly id: string;
        readonly slug: string;
        readonly legalName: string | null;
        readonly createdAt: string;
        readonly updatedAt: string;
        readonly image: {
            readonly alt: string;
            readonly thumb: {
                readonly dimensions: ReadonlyArray<number>;
                readonly png: {
                    readonly alt: string;
                    readonly url: string;
                } | null;
            };
        } | null;
    } | {
        readonly __typename: "PersonContributor";
        readonly id: string;
        readonly slug: string;
        readonly givenName: string | null;
        readonly familyName: string | null;
        readonly createdAt: string;
        readonly updatedAt: string;
        readonly image: {
            readonly alt: string;
            readonly thumb: {
                readonly dimensions: ReadonlyArray<number>;
                readonly png: {
                    readonly alt: string;
                    readonly url: string;
                } | null;
            };
        } | null;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "ContributorListFragment";
};
export type ContributorListFragment$data = ContributorListFragment;
export type ContributorListFragment$key = {
    readonly " $data"?: ContributorListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorListFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetPreview",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "PreviewImageMap",
      "kind": "LinkedField",
      "name": "thumb",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "dimensions",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PreviewImage",
          "kind": "LinkedField",
          "name": "png",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "url",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "legalName",
              "storageKey": null
            },
            (v2/*: any*/),
            (v3/*: any*/),
            (v5/*: any*/)
          ],
          "type": "OrganizationContributor",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "givenName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "familyName",
              "storageKey": null
            },
            (v2/*: any*/),
            (v3/*: any*/),
            (v5/*: any*/)
          ],
          "type": "PersonContributor",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "AnyContributorConnection",
  "abstractKey": null
};
})();
(node as any).hash = 'e5c8a50380297ceb9bace02a3d5e8f2f';
export default node;
