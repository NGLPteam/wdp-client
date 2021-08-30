/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorUpdatePersonFormFragment = {
    readonly contributorId?: string;
    readonly links?: ReadonlyArray<{
        readonly title: string;
        readonly url: string;
    } | null>;
    readonly " $fragmentRefs": FragmentRefs<"ContributorPersonFormFragment">;
    readonly " $refType": "ContributorUpdatePersonFormFragment";
};
export type ContributorUpdatePersonFormFragment$data = ContributorUpdatePersonFormFragment;
export type ContributorUpdatePersonFormFragment$key = {
    readonly " $data"?: ContributorUpdatePersonFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ContributorUpdatePersonFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorUpdatePersonFormFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": "contributorId",
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ContributorLink",
          "kind": "LinkedField",
          "name": "links",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "url",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorPersonFormFragment"
        }
      ],
      "type": "PersonContributor",
      "abstractKey": null
    }
  ],
  "type": "AnyContributor",
  "abstractKey": "__isAnyContributor"
};
(node as any).hash = '47d835391fe3c4e923930ed9ad7b942c';
export default node;
