/**
 * @generated SignedSource<<b07e6a4544dc21aed80ca530adb910b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type LinkListVariant = "CARDS" | "COMPACT" | "GRID" | "PROMOS" | "SUMMARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type LinksTemplateFragment$data = {
  readonly __typename: "LinkListTemplateInstance";
  readonly linksDefinition?: {
    readonly variant: LinkListVariant | null | undefined;
  };
  readonly " $fragmentSpreads": FragmentRefs<"sharedListTemplateFragment">;
  readonly " $fragmentType": "LinksTemplateFragment";
};
export type LinksTemplateFragment$key = {
  readonly " $data"?: LinksTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LinksTemplateFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LinksTemplateFragment",
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
          "alias": "linksDefinition",
          "args": null,
          "concreteType": "LinkListTemplateDefinition",
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
      "type": "LinkListTemplateInstance",
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

(node as any).hash = "14b4e04062118018bd9e3ccfd4abee78";

export default node;
