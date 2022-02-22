/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FeaturedJournalsFragment = {
    readonly entities: ReadonlyArray<{
        readonly slug?: string | undefined;
        readonly " $fragmentRefs": FragmentRefs<"FeaturedJournalFragment">;
    }>;
    readonly " $refType": "FeaturedJournalsFragment";
};
export type FeaturedJournalsFragment$data = FeaturedJournalsFragment;
export type FeaturedJournalsFragment$key = {
    readonly " $data"?: FeaturedJournalsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FeaturedJournalsFragment">;
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
(node as any).hash = '58c325f9db346946ac82f1dc9f9f1624';
export default node;
