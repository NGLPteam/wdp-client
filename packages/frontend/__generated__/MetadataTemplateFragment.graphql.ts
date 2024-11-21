/**
 * @generated SignedSource<<cfb95b4573922d8acb3c2f28978c7606>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type MetadataBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type MetadataTemplateFragment$data = {
  readonly definition: {
    readonly background: MetadataBackground | null | undefined;
  };
  readonly slots: {
    readonly header: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly itemsA: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
    readonly itemsB: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
    readonly itemsC: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
    readonly itemsD: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "MetadataTemplateFragment";
};
export type MetadataTemplateFragment$key = {
  readonly " $data"?: MetadataTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MetadataTemplateFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedBlockSlotFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MetadataTemplateFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MetadataTemplateDefinition",
      "kind": "LinkedField",
      "name": "definition",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "background",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MetadataTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "header",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "sharedInlineSlotFragment"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "itemsA",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "itemsB",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "itemsC",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "itemsD",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MetadataTemplateInstance",
  "abstractKey": null
};
})();

(node as any).hash = "4f32ad37de9e87926247267375b76a25";

export default node;
