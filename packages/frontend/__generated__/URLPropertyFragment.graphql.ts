/**
 * @generated SignedSource<<544e1ca4ec8c2e24b56e89d139a5ea2b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type URLPropertyFragment$data = {
  readonly fullPath: string;
  readonly label: string;
  readonly url: {
    readonly href: string | null | undefined;
    readonly label: string | null | undefined;
    readonly title: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "URLPropertyFragment";
};
export type URLPropertyFragment$key = {
  readonly " $data"?: URLPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"URLPropertyFragment">;
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

(node as any).hash = "33b34dfb9e247bdd3985fad47a54f2be";

export default node;
