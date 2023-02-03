/**
 * @generated SignedSource<<3ff69e413070eda02f25bf2d8c729a42>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturedJournalsFragment$data = {
  readonly entities: ReadonlyArray<{
    readonly slug?: String;
    readonly " $fragmentSpreads": FragmentRefs<"FeaturedJournalFragment">;
  }>;
  readonly " $fragmentType": "FeaturedJournalsFragment";
};
export type FeaturedJournalsFragment$key = {
  readonly " $data"?: FeaturedJournalsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturedJournalsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedJournalsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entities",
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            }
          ],
          "type": "Sluggable",
          "abstractKey": "__isSluggable"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FeaturedJournalFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "EntitiesProperty",
  "abstractKey": null
};

(node as any).hash = "58c325f9db346946ac82f1dc9f9f1624";

export default node;
