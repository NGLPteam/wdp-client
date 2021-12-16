/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type URLPropertyFragment = {
    readonly url: {
        readonly href: string | null;
        readonly label: string | null;
        readonly title: string | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "URLPropertyFragment";
};
export type URLPropertyFragment$data = URLPropertyFragment;
export type URLPropertyFragment$key = {
    readonly " $data"?: URLPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"URLPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "URLPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "URLReference",
      "kind": "LinkedField",
      "name": "url",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "href",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "label",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "URLProperty",
  "abstractKey": null
};
(node as any).hash = '132d13e45fe428d319ff3886f6f9807f';
export default node;
