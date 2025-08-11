/**
 * @generated SignedSource<<66c45569a7e2878ae56df6e825359fc1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type DetailBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type DetailVariant = "COLUMNS" | "FULL" | "SUMMARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type DetailTemplateFragment$data = {
  readonly __typename: "DetailTemplateInstance";
  readonly detailDefinition: {
    readonly background: DetailBackground | null | undefined;
    readonly variant: DetailVariant | null | undefined;
  };
  readonly hidden: boolean;
  readonly " $fragmentSpreads": FragmentRefs<"ColumnsDetailFragment" | "FullDetailFragment" | "SummaryDetailFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ColumnsDetailFragment"
    }
  ],
  "type": "DetailTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "584362ff3c4ec2fe5f34d01ab908a6d7";

export default node;
