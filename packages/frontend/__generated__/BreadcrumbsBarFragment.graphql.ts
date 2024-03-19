/**
 * @generated SignedSource<<16f8a924523dc8566b64afda081782e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BreadcrumbsBarFragment$data = {
  readonly __typename: string;
  readonly slug?: string;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsFragment">;
  readonly " $fragmentType": "BreadcrumbsBarFragment";
};
export type BreadcrumbsBarFragment$key = {
  readonly " $data"?: BreadcrumbsBarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BreadcrumbsBarFragment",
  "selections": [
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
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ],
      "type": "Sluggable",
      "abstractKey": "__isSluggable"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "59de2626a642eb171bc8dfc0152d1079";

export default node;
