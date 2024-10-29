/**
 * @generated SignedSource<<56c1ead56fa12c84633bc69213d68e65>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderTitleBlockFragment$data = {
  readonly header: {
    readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
  } | null | undefined;
  readonly headerAside: {
    readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
  } | null | undefined;
  readonly summary: {
    readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
  } | null | undefined;
  readonly " $fragmentType": "HeaderTitleBlockFragment";
};
export type HeaderTitleBlockFragment$key = {
  readonly " $data"?: HeaderTitleBlockFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderTitleBlockFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedInlineSlotFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeaderTitleBlockFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "header",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotInlineInstance",
      "kind": "LinkedField",
      "name": "headerAside",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateSlotBlockInstance",
      "kind": "LinkedField",
      "name": "summary",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "sharedBlockSlotFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HeroTemplateInstanceSlots",
  "abstractKey": null
};
})();

(node as any).hash = "c4f3f6068cee2e2b770a3bda20b47aa4";

export default node;
