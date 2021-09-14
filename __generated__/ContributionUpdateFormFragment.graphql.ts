/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributionUpdateFormFragment = {
    readonly __typename: "CollectionContribution";
    readonly contributionId: string;
    readonly contributor: {
        readonly __typename: "OrganizationContributor";
        readonly slug: string;
        readonly legalName: string | null;
    } | {
        readonly __typename: "PersonContributor";
        readonly slug: string;
        readonly givenName: string | null;
        readonly familyName: string | null;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    };
    readonly collection: {
        readonly title: string | null;
    };
    readonly " $fragmentRefs": FragmentRefs<"ContributionUpdateFormFieldsFragment">;
    readonly " $refType": "ContributionUpdateFormFragment";
} | {
    readonly __typename: "ItemContribution";
    readonly contributionId: string;
    readonly contributor: {
        readonly __typename: "OrganizationContributor";
        readonly slug: string;
        readonly legalName: string | null;
    } | {
        readonly __typename: "PersonContributor";
        readonly slug: string;
        readonly givenName: string | null;
        readonly familyName: string | null;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    };
    readonly item: {
        readonly title: string | null;
    };
    readonly title: string | null;
    readonly " $fragmentRefs": FragmentRefs<"ContributionUpdateFormFieldsFragment">;
    readonly " $refType": "ContributionUpdateFormFragment";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "ContributionUpdateFormFragment";
};
export type ContributionUpdateFormFragment$data = ContributionUpdateFormFragment;
export type ContributionUpdateFormFragment$key = {
    readonly " $data"?: ContributionUpdateFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ContributionUpdateFormFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": "contributionId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "contributor",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "legalName",
          "storageKey": null
        }
      ],
      "type": "OrganizationContributor",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v2/*: any*/),
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
        }
      ],
      "type": "PersonContributor",
      "abstractKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = [
  (v4/*: any*/)
],
v6 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ContributionUpdateFormFieldsFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionUpdateFormFragment",
  "selections": [
    (v0/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v1/*: any*/),
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "collection",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        },
        (v6/*: any*/)
      ],
      "type": "CollectionContribution",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v1/*: any*/),
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        },
        (v4/*: any*/),
        (v6/*: any*/)
      ],
      "type": "ItemContribution",
      "abstractKey": null
    }
  ],
  "type": "AnyContribution",
  "abstractKey": "__isAnyContribution"
};
})();
(node as any).hash = 'ff60dd1a3f3568501b6aff3c25d7de8b';
export default node;
