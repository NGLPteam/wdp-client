/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SelectPropertyFragment = {
    readonly fullPath: string;
    readonly label: string;
    readonly selection: string | null;
    readonly options: ReadonlyArray<{
        readonly label: string;
        readonly value: string;
    }>;
    readonly " $refType": "SelectPropertyFragment";
};
export type SelectPropertyFragment$data = SelectPropertyFragment;
export type SelectPropertyFragment$key = {
    readonly " $data"?: SelectPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SelectPropertyFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SelectPropertyFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "selection",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SelectOption",
      "kind": "LinkedField",
      "name": "options",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SelectProperty",
  "abstractKey": null
};
})();
(node as any).hash = 'f1c16d9ed1650f6db85d5ce134b9e249';
export default node;
