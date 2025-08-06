/**
 * @generated SignedSource<<2365c8bd074345c05f82823d181e9743>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HarvestAttemptState = "CANCELLED" | "EXECUTING" | "EXTRACTED" | "PENDING" | "SCHEDULED" | "%future added value";
export type HarvestMetadataFormat = "ESPLORO" | "JATS" | "METS" | "MODS" | "OAIDC" | "PRESSBOOKS" | "%future added value";
export type HarvestScheduleMode = "MANUAL" | "SCHEDULED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HarvestAttemptDetailsFragment$data = {
  readonly beganAt: string | null | undefined;
  readonly currentState: HarvestAttemptState;
  readonly endedAt: string | null | undefined;
  readonly extractionMappingTemplate: string;
  readonly id: string;
  readonly metadataFormat: HarvestMetadataFormat;
  readonly mode: HarvestScheduleMode;
  readonly note: string | null | undefined;
  readonly recordCount: number | null | undefined;
  readonly scheduledAt: string | null | undefined;
  readonly " $fragmentType": "HarvestAttemptDetailsFragment";
};
export type HarvestAttemptDetailsFragment$key = {
  readonly " $data"?: HarvestAttemptDetailsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HarvestAttemptDetailsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HarvestAttemptDetailsFragment",
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
      "name": "currentState",
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
      "name": "beganAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "mode",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "scheduledAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "recordCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "note",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "extractionMappingTemplate",
      "storageKey": null
    }
  ],
  "type": "HarvestAttempt",
  "abstractKey": null
};

(node as any).hash = "4311298eb1652cf799f730b2f9ea7b2c";

export default node;
