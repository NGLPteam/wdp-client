/**
 * @generated SignedSource<<c70dff08e6a3b33d769c484ab539233c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestMetadataFormat = "ESPLORO" | "JATS" | "METS" | "MODS" | "OAIDC" | "%future added value";
export type HarvestRecordStatus = "ACTIVE" | "DELETED" | "PENDING" | "SKIPPED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestRecordDetailsFragment$data = {
  readonly id: string;
  readonly identifier: string;
  readonly metadataFormat: HarvestMetadataFormat;
  readonly rawMetadataSource: string | null | undefined;
  readonly status: HarvestRecordStatus;
  readonly " $fragmentType": "HarvestRecordDetailsFragment";
};
export type HarvestRecordDetailsFragment$key = {
  readonly " $data"?: HarvestRecordDetailsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestRecordDetailsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestRecordDetailsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "identifier",
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
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rawMetadataSource",
      "storageKey": null
    }
  ],
  "type": "HarvestRecord",
  "abstractKey": null
};

(node as any).hash = "77bb03210101d7acc575229f82c95e4e";

export default node;
