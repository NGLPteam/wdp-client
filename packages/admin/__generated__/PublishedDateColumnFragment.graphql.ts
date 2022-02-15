/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PublishedDateColumnFragment = {
    readonly published: {
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly " $refType": "PublishedDateColumnFragment";
};
export type PublishedDateColumnFragment$data = PublishedDateColumnFragment;
export type PublishedDateColumnFragment$key = {
    readonly " $data"?: PublishedDateColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PublishedDateColumnFragment">;
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
(node as any).hash = 'f077ddb7a4dd8ad119822083188da2a6';
export default node;
