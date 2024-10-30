/**
 * @generated SignedSource<<cb445d63bb13f2c5d8508f4ba2d948ea>>
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
    }
  ],
  "type": "PageListTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "61145ad40769f738c54799811842fc9e";

export default node;
