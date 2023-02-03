/**
 * @generated SignedSource<<c138deb40f613e4eb7de01a4a05fbd01>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CCLicenseFragment$data = {
  readonly ccLicense: {
    readonly defaultSelection?: string | null;
    readonly options?: ReadonlyArray<{
      readonly label: string;
      readonly value: string;
    }>;
    readonly selection?: string | null;
  } | null;
  readonly " $fragmentType": "CCLicenseFragment";
};
export type CCLicenseFragment$key = {
  readonly " $data"?: CCLicenseFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CCLicenseFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CCLicenseFragment",
  "selections": [
    {
      "alias": "ccLicense",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "cc_license"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "selection",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "defaultSelection",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "SelectOption",
              "kind": "LinkedField",
              "name": "options",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "label",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "value",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "SelectProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"cc_license\")"
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};

(node as any).hash = "4bbb9731d39ac790f320211388bf9765";

export default node;
