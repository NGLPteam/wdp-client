/**
 * @generated SignedSource<<20e2a3935d169883abd539c7ecaba0f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ContributorDetailFragment$data = {
  readonly affiliation?: string | null | undefined;
  readonly attributions: {
    readonly nodes: ReadonlyArray<{
      readonly id?: string;
      readonly " $fragmentSpreads": FragmentRefs<"ContributionSummaryFragment">;
    }>;
    readonly pageInfo: {
      readonly totalCount: number;
      readonly " $fragmentSpreads": FragmentRefs<"BrowseListLayoutFragment">;
    };
  };
  readonly bio: string | null | undefined;
  readonly id?: string;
  readonly image: {
    readonly storage: AttachmentStorage | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ContributorAvatarFragment">;
  };
  readonly links: ReadonlyArray<{
    readonly title: string;
    readonly url: string;
  }>;
  readonly orcid: string | null | undefined;
  readonly title?: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorNameFragment">;
  readonly " $fragmentType": "ContributorDetailFragment";
};
export type ContributorDetailFragment$key = {
  readonly " $data"?: ContributorDetailFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorDetailFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
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
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "page"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ContributorDetailRefetchQuery.graphql'),
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "ContributorDetailFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContributorNameFragment"
    },
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
      "args": [
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page"
        },
        {
          "kind": "Literal",
          "name": "perPage",
          "value": 25
        }
      ],
      "concreteType": "ContributorAttributionConnection",
      "kind": "LinkedField",
      "name": "attributions",
      "plural": false,
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
              "kind": "InlineFragment",
              "selections": (v0/*: any*/),
              "type": "ContributorItemAttribution",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": (v0/*: any*/),
              "type": "ContributorCollectionAttribution",
              "abstractKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ContributionSummaryFragment"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "totalCount",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "BrowseListLayoutFragment"
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
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Node",
      "abstractKey": "__isNode"
    }
  ],
  "type": "Contributor",
  "abstractKey": "__isContributor"
};
})();

(node as any).hash = "87666474f5e8f27b3ec3463e95e7d4db";

export default node;
