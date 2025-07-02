/**
 * @generated SignedSource<<a18224d7347b4fc2e4c8829de45ad1ca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProcessingCheckFragment$data = {
  readonly main: {
    readonly allHidden: boolean;
    readonly templates: ReadonlyArray<{
      readonly __typename?: string;
    }>;
  } | null | undefined;
  readonly " $fragmentType": "ProcessingCheckFragment";
};
export type ProcessingCheckFragment$key = {
  readonly " $data"?: ProcessingCheckFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProcessingCheckFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProcessingCheckFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MainLayoutInstance",
      "kind": "LinkedField",
      "name": "main",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "allHidden",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "templates",
          "plural": true,
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
                }
              ],
              "type": "TemplateInstance",
              "abstractKey": "__isTemplateInstance"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "EntityLayouts",
  "abstractKey": null
};

(node as any).hash = "0bcf2264cd9d2bca709edd82e84e6257";

export default node;
