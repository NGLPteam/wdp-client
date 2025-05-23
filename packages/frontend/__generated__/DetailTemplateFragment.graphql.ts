/**
 * @generated SignedSource<<772045ed0faecde17249f75ca421def5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type DetailBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type DetailVariant = "FULL" | "SUMMARY" | "%future added value";
export type TemplateWidth = "FULL" | "HALF" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type DetailTemplateFragment$data = {
  readonly __typename: "DetailTemplateInstance";
  readonly detailDefinition: {
    readonly background: DetailBackground | null | undefined;
    readonly showAnnouncements: boolean | null | undefined;
    readonly showHeroImage: boolean | null | undefined;
    readonly variant: DetailVariant | null | undefined;
    readonly width: TemplateWidth | null | undefined;
  };
  readonly hidden: boolean;
  readonly " $fragmentSpreads": FragmentRefs<"FullDetailFragment" | "SummaryDetailFragment">;
  readonly " $fragmentType": "DetailTemplateFragment";
};
export type DetailTemplateFragment$key = {
  readonly " $data"?: DetailTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DetailTemplateFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailTemplateFragment",
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
      "name": "hidden",
      "storageKey": null
    },
    {
      "alias": "detailDefinition",
      "args": null,
      "concreteType": "DetailTemplateDefinition",
      "kind": "LinkedField",
      "name": "definition",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "background",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "variant",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showAnnouncements",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showHeroImage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "width",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SummaryDetailFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FullDetailFragment"
    }
  ],
  "type": "DetailTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "bb3c6e68a4fd780f4f29dcfa492e82fa";

export default node;
