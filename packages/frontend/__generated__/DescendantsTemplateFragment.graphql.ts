/**
 * @generated SignedSource<<3c704b1c35ffca7155a4ecc7e636676e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type DescendantListVariant = "CARDS" | "COMPACT" | "GRID" | "PROMOS" | "SUMMARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type DescendantsTemplateFragment$data = {
  readonly __typename: "DescendantListTemplateInstance";
  readonly descendantsDefinition?: {
    readonly variant: DescendantListVariant | null | undefined;
  };
  readonly " $fragmentSpreads": FragmentRefs<"sharedListTemplateFragment">;
  readonly " $fragmentType": "DescendantsTemplateFragment";
};
export type DescendantsTemplateFragment$key = {
  readonly " $data"?: DescendantsTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DescendantsTemplateFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DescendantsTemplateFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "alias": "descendantsDefinition",
          "args": null,
          "concreteType": "DescendantListTemplateDefinition",
          "kind": "LinkedField",
          "name": "definition",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "variant",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "type": "DescendantListTemplateInstance",
      "abstractKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "sharedListTemplateFragment"
    }
  ],
  "type": "AnyMainTemplateInstance",
  "abstractKey": "__isAnyMainTemplateInstance"
};

(node as any).hash = "55dec957a078e186f2aed14c4e9627d4";

export default node;
