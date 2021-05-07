/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemCardFragment = {
    readonly slug: unknown;
    readonly title: string;
    readonly description: string;
    readonly " $refType": "ItemCardFragment";
};
export type ItemCardFragment$data = ItemCardFragment;
export type ItemCardFragment$key = {
    readonly " $data"?: ItemCardFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ItemCardFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemCardFragment",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = '4dbcbd5859f905a38011a44d5bd10614';
export default node;
