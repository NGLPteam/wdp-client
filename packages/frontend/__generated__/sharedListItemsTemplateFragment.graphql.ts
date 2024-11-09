/**
 * @generated SignedSource<<0ab4a27bbb388564f6fd190078d1728c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type sharedListItemsTemplateFragment$data = {
  readonly listItemLayouts: ReadonlyArray<{
    readonly template: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedListItemTemplateFragment">;
    } | null | undefined;
  }>;
  readonly " $fragmentType": "sharedListItemsTemplateFragment";
};
export type sharedListItemsTemplateFragment$key = {
  readonly " $data"?: sharedListItemsTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"sharedListItemsTemplateFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "sharedListItemsTemplateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ListItemLayoutInstance",
      "kind": "LinkedField",
      "name": "listItemLayouts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ListItemTemplateInstance",
          "kind": "LinkedField",
          "name": "template",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "sharedListItemTemplateFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TemplateEntityList",
  "abstractKey": null
};

(node as any).hash = "b933c1618102a8906df2cb7457034a78";

export default node;
