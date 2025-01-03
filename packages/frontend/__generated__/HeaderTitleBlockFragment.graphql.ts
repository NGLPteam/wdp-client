/**
 * @generated SignedSource<<a22d75e82d1df3c7aaa5b679d2c88353>>
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
  readonly headerSummary: {
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
      "name": "headerSummary",
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

(node as any).hash = "4358bd94e0098ee4b636e0b2e350338c";

export default node;
