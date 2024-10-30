/**
 * @generated SignedSource<<4c373446a9efe08e0dc9473d6e77c933>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type DetailBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type DetailVariant = "FULL" | "SUMMARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type DetailTemplateFragment$data = {
  readonly __typename: "DetailTemplateInstance";
  readonly detailDefinition: {
    readonly background: DetailBackground | null | undefined;
    readonly showAnnouncements: boolean | null | undefined;
    readonly showHeroImage: boolean | null | undefined;
    readonly variant: DetailVariant | null | undefined;
  };
  readonly slots: {
    readonly " $fragmentSpreads": FragmentRefs<"SummaryDetailFragment">;
  };
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
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "DetailTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SummaryDetailFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "DetailTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "eadabc753543b929593e96178e1710fd";

export default node;
