/**
 * @generated SignedSource<<8cc1d3ba7c7fc5870db108e55e6baf2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorCollectionDetailLayoutFragment$data = {
  readonly collection: {
    readonly community: {
      readonly " $fragmentSpreads": FragmentRefs<"AppLayoutCommunityFragment">;
    };
    readonly " $fragmentSpreads": FragmentRefs<"ContributorDetailNavFragment">;
  } | null | undefined;
  readonly contributor: {
    readonly " $fragmentSpreads": FragmentRefs<"ContributorDetailFragment" | "ContributorHTMLHeadFragment">;
  } | null | undefined;
  readonly " $fragmentType": "ContributorCollectionDetailLayoutFragment";
};
export type ContributorCollectionDetailLayoutFragment$key = {
  readonly " $data"?: ContributorCollectionDetailLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorCollectionDetailLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "collection"
    },
    {
      "kind": "RootArgument",
      "name": "slug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorCollectionDetailLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "slug"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "contributor",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorHTMLHeadFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorDetailFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "collection"
        }
      ],
      "concreteType": "Collection",
      "kind": "LinkedField",
      "name": "collection",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorDetailNavFragment"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Community",
          "kind": "LinkedField",
          "name": "community",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "AppLayoutCommunityFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "7eaede63ceb31360cac14e5c14f6f77b";

export default node;
