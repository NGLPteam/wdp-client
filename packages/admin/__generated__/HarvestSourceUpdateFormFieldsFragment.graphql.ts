/**
 * @generated SignedSource<<8c2129c39857ae2e4829bf053fff9292>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestMetadataFormat = "ESPLORO" | "JATS" | "METS" | "MODS" | "OAIDC" | "%future added value";
export type HarvestProtocol = "OAI" | "UNKNOWN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestSourceUpdateFormFieldsFragment$data = {
  readonly baseURL: string;
  readonly description: string | null | undefined;
  readonly extractionMappingTemplate: string;
  readonly mappingOptions: {
    readonly autoCreateVolumesAndIssues: boolean;
    readonly linkIdentifiersGlobally: boolean;
    readonly useMetadataMappings: boolean;
  };
  readonly metadataFormat: HarvestMetadataFormat;
  readonly name: string;
  readonly protocol: HarvestProtocol;
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
      "kind": "ScalarField",
      "name": "extractionMappingTemplate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "protocol",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "metadataFormat",
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

(node as any).hash = "c6789d0626c009a8773d2b90bf8bc6d1";

export default node;
