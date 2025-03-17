/**
 * @generated SignedSource<<f6c544a720a93b02a15d143ffbfd6700>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HarvestSourceUpdateFormFieldsFragment$data = {
  readonly baseURL: string;
  readonly description: string | null | undefined;
  readonly mappingOptions: {
    readonly autoCreateVolumesAndIssues: boolean;
    readonly linkIdentifiersGlobally: boolean;
    readonly useMetadataMappings: boolean;
  };
  readonly name: string;
  readonly readOptions: {
    readonly maxRecords: number;
  };
  readonly " $fragmentType": "HarvestSourceUpdateFormFieldsFragment";
};
export type HarvestSourceUpdateFormFieldsFragment$key = {
  readonly " $data"?: HarvestSourceUpdateFormFieldsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestSourceUpdateFormFieldsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestSourceUpdateFormFieldsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "baseURL",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestOptionsMapping",
      "kind": "LinkedField",
      "name": "mappingOptions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "autoCreateVolumesAndIssues",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "linkIdentifiersGlobally",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "useMetadataMappings",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestOptionsRead",
      "kind": "LinkedField",
      "name": "readOptions",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "maxRecords",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HarvestSource",
  "abstractKey": null
};

(node as any).hash = "1900449f71ffca2f4d9cfb80c92530fc";

export default node;
