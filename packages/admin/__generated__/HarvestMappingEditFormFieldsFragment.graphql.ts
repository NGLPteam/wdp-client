/**
 * @generated SignedSource<<3bdda661c94f8345ada195418bfb64a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestMetadataFormat = "ESPLORO" | "JATS" | "METS" | "MODS" | "OAIDC" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestMappingEditFormFieldsFragment$data = {
  readonly extractionMappingTemplate: string;
  readonly harvestSet: {
    readonly id: string;
  } | null | undefined;
  readonly mappingOptions: {
    readonly autoCreateVolumesAndIssues: boolean;
    readonly linkIdentifiersGlobally: boolean;
    readonly useMetadataMappings: boolean;
  };
  readonly metadataFormat: HarvestMetadataFormat;
  readonly readOptions: {
    readonly maxRecords: number;
  };
  readonly targetEntity: {
    readonly id?: string;
    readonly slug: string;
    readonly title: string;
  };
  readonly " $fragmentType": "HarvestMappingEditFormFieldsFragment";
};
export type HarvestMappingEditFormFieldsFragment$key = {
  readonly " $data"?: HarvestMappingEditFormFieldsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestMappingEditFormFieldsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestMappingEditFormFieldsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "targetEntity",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v0/*: any*/),
          "type": "Community",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v0/*: any*/),
          "type": "Collection",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestSet",
      "kind": "LinkedField",
      "name": "harvestSet",
      "plural": false,
      "selections": (v0/*: any*/),
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
      "kind": "ScalarField",
      "name": "extractionMappingTemplate",
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
  "type": "HarvestMapping",
  "abstractKey": null
};
})();

(node as any).hash = "68518bda9e69ecdad6422fef5da7d19c";

export default node;
