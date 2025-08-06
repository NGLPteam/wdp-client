/**
 * @generated SignedSource<<db32b80665f37eb5ed1e230ca6de40ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestMetadataFormat = "ESPLORO" | "JATS" | "METS" | "MODS" | "OAIDC" | "PRESSBOOKS" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestMappingEditFormFieldsFragment$data = {
  readonly extractionMappingTemplate: string;
  readonly frequencyExpression: string | null | undefined;
  readonly harvestSet: {
    readonly identifier: string;
  } | null | undefined;
  readonly harvestSource: {
    readonly slug: string;
  };
  readonly lastScheduledAt: string | null | undefined;
  readonly mappingOptions: {
    readonly autoCreateVolumesAndIssues: boolean;
    readonly linkIdentifiersGlobally: boolean;
    readonly useMetadataMappings: boolean;
  };
  readonly metadataFormat: HarvestMetadataFormat;
  readonly readOptions: {
    readonly maxRecords: number;
  };
  readonly scheduleChangedAt: string | null | undefined;
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = [
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v1/*: any*/),
          "type": "Community",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v1/*: any*/),
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
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "identifier",
          "storageKey": null
        }
      ],
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "frequencyExpression",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastScheduledAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "scheduleChangedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HarvestSource",
      "kind": "LinkedField",
      "name": "harvestSource",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "HarvestMapping",
  "abstractKey": null
};
})();

(node as any).hash = "950f62f7b5da396bbfb71a2feac9734d";

export default node;
