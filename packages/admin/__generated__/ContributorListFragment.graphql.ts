/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly __typename: string;
        readonly id?: string | undefined;
        readonly slug?: string | undefined;
        readonly legalName?: string | null | undefined;
        readonly createdAt?: string | undefined;
        readonly updatedAt?: string | undefined;
        readonly givenName?: string | null | undefined;
        readonly familyName?: string | null | undefined;
        readonly " $fragmentRefs": FragmentRefs<"ContributorNameColumnFragment">;
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
  "args": null,
  "kind": "FragmentSpread",
  "name": "ContributorNameColumnFragment"
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
            (v4/*: any*/)
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
            (v3/*: any*/)
          ],
          "type": "PersonContributor",
          "abstractKey": null
        },
        (v4/*: any*/)
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
(node as any).hash = '758d702497e6e77a9ca2b80f005ed8fa';
export default node;
