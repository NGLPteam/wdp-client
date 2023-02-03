/**
 * @generated SignedSource<<e6bb1c14a7d641cc60b266de0acab7a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PublishedDateColumnFragment$data = {
  readonly published: {
    readonly " $fragmentSpreads": FragmentRefs<"PrecisionDateFragment">;
  };
  readonly " $fragmentType": "PublishedDateColumnFragment";
};
export type PublishedDateColumnFragment$key = {
  readonly " $data"?: PublishedDateColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PublishedDateColumnFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PublishedDateColumnFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "VariablePrecisionDate",
      "kind": "LinkedField",
      "name": "published",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PrecisionDateFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ReferencesGlobalEntityDates",
  "abstractKey": "__isReferencesGlobalEntityDates"
};

(node as any).hash = "f077ddb7a4dd8ad119822083188da2a6";

export default node;
