/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type URLPropertyFragment = {
    readonly fullPath: string;
    readonly label: string;
    readonly url: {
        readonly label: string | null;
        readonly title: string | null;
        readonly href: string | null;
    } | null;
    readonly " $refType": "URLPropertyFragment";
};
export type URLPropertyFragment$data = URLPropertyFragment;
export type URLPropertyFragment$key = {
    readonly " $data"?: URLPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"URLPropertyFragment">;
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
  "name": "URLPropertyFragment",
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
      "concreteType": "URLReference",
      "kind": "LinkedField",
      "name": "url",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
          "name": "href",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "URLProperty",
  "abstractKey": null
};
})();
(node as any).hash = '33b34dfb9e247bdd3985fad47a54f2be';
export default node;
