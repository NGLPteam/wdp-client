/**
 * @generated SignedSource<<0170344e4af7bda41a16cd9995d29e94>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BreadcrumbsFragment$data = {
  readonly __typename: string;
  readonly breadcrumbs: ReadonlyArray<{
    readonly depth: number;
    readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbLinkFragment">;
  }>;
  readonly slug?: string;
  readonly title: string;
  readonly " $fragmentType": "BreadcrumbsFragment";
};
export type BreadcrumbsFragment$key = {
  readonly " $data"?: BreadcrumbsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BreadcrumbsFragment",
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
      "alias": null,
      "args": null,
      "concreteType": "EntityBreadcrumb",
      "kind": "LinkedField",
      "name": "breadcrumbs",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "depth",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BreadcrumbLinkFragment"
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
          "name": "slug",
          "storageKey": null
        }
      ],
      "type": "Sluggable",
      "abstractKey": "__isSluggable"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "6237a9b70905956f05610fcd9c290df8";

export default node;
