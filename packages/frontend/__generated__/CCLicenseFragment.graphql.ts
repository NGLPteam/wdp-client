/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CCLicenseFragment = {
    readonly ccLicense: {
        readonly selection?: string | null | undefined;
        readonly defaultSelection?: string | null | undefined;
    } | null;
    readonly " $refType": "CCLicenseFragment";
};
export type CCLicenseFragment$data = CCLicenseFragment;
export type CCLicenseFragment$key = {
    readonly " $data"?: CCLicenseFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CCLicenseFragment">;
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
(node as any).hash = '0877063247961b589cac552e27f990d3';
export default node;
