/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SelectPropertyFragment = {
    readonly options: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "SelectPropertyFragment";
};
export type SelectPropertyFragment$data = SelectPropertyFragment;
export type SelectPropertyFragment$key = {
    readonly " $data"?: SelectPropertyFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"SelectPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SelectPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SelectOption",
      "kind": "LinkedField",
      "name": "options",
      "plural": true,
      "selections": [
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
          "name": "value",
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
  "type": "SelectProperty",
  "abstractKey": null
};
(node as any).hash = '6c70e17a99e35067fa148260030537eb';
export default node;
