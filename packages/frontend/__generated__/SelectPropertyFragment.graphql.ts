/**
 * @generated SignedSource<<55f30214b3394d431b25ae338229f27d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SelectPropertyFragment$data = {
  readonly fullPath: string;
  readonly label: string;
  readonly options: ReadonlyArray<{
    readonly label: string;
    readonly value: string;
  }>;
  readonly selection: string | null | undefined;
  readonly " $fragmentType": "SelectPropertyFragment";
};
export type SelectPropertyFragment$key = {
  readonly " $data"?: SelectPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SelectPropertyFragment">;
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

(node as any).hash = "f1c16d9ed1650f6db85d5ce134b9e249";

export default node;
