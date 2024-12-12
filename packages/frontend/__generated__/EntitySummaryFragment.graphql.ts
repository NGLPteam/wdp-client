/**
 * @generated SignedSource<<131aa3aab7f3c587c68e72f37d775b68>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntitySummaryFragment$data = {
  readonly __typename: string;
  readonly layouts: {
    readonly listItem: {
      readonly template: {
        readonly " $fragmentSpreads": FragmentRefs<"sharedListItemTemplateFragment">;
      } | null | undefined;
    } | null | undefined;
  };
  readonly " $fragmentType": "EntitySummaryFragment";
};
export type EntitySummaryFragment$key = {
  readonly " $data"?: EntitySummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntitySummaryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntitySummaryFragment",
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
      "concreteType": "EntityLayouts",
      "kind": "LinkedField",
      "name": "layouts",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ListItemLayoutInstance",
          "kind": "LinkedField",
          "name": "listItem",
          "plural": false,
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
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "b44d9888930061ac261e65345e5a7f09";

export default node;
