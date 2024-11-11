/**
 * @generated SignedSource<<dbec12a78c86540a84808592997c4cd9>>
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
  readonly entity: {
    readonly " $fragmentSpreads": FragmentRefs<"FullDetailFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"SummaryDetailFragment">;
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entity",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FullDetailFragment"
        }
      ],
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "SummaryDetailFragment"
    }
  ],
  "type": "DetailTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "2ad5f0350af4b4adee0db8e9f4c2b114";

export default node;
