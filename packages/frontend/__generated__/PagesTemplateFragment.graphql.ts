/**
 * @generated SignedSource<<a3f6bf50ddb29bdd2e95d261ab914118>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type PageListBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type PagesTemplateFragment$data = {
  readonly __typename: "PageListTemplateInstance";
  readonly entity: {
    readonly " $fragmentSpreads": FragmentRefs<"ListPagesTemplateFragment">;
  };
  readonly pagesDefinition: {
    readonly background: PageListBackground | null | undefined;
  };
  readonly " $fragmentType": "PagesTemplateFragment";
};
export type PagesTemplateFragment$key = {
  readonly " $data"?: PagesTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PagesTemplateFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PagesTemplateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": "pagesDefinition",
      "args": null,
      "concreteType": "PageListTemplateDefinition",
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
        }
      ],
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
          "name": "ListPagesTemplateFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PageListTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "3ea94f8e9130ec3aef893b66034886fe";

export default node;
