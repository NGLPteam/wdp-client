/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityVisibility = "HIDDEN" | "LIMITED" | "VISIBLE" | "%future added value";
export type ItemUpdateFormFieldsFragment = {
    readonly title: string;
    readonly subtitle: string | null;
    readonly doi: string | null;
    readonly issn: string | null;
    readonly visibility: EntityVisibility;
    readonly summary: string | null;
    readonly visibleAfterAt: string | null;
    readonly visibleUntilAt: string | null;
    readonly thumbnail: {
        readonly " $fragmentRefs": FragmentRefs<"FileUploadFragment">;
    };
    readonly heroImage: {
        readonly " $fragmentRefs": FragmentRefs<"FileUploadFragment">;
    };
    readonly published: {
        readonly " $fragmentRefs": FragmentRefs<"VariablePrecisionDateControlFragment">;
    };
    readonly " $refType": "ItemUpdateFormFieldsFragment";
};
export type ItemUpdateFormFieldsFragment$data = ItemUpdateFormFieldsFragment;
export type ItemUpdateFormFieldsFragment$key = {
    readonly " $data"?: ItemUpdateFormFieldsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemUpdateFormFieldsFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "FileUploadFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemUpdateFormFieldsFragment",
  "selections": [
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
      "name": "subtitle",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "doi",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "issn",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "visibility",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "visibleAfterAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "visibleUntilAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "thumbnail",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "heroImage",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "VariablePrecisionDate",
      "kind": "LinkedField",
      "name": "published",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "VariablePrecisionDateControlFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Item",
  "abstractKey": null
};
})();
(node as any).hash = 'a7977258bd115dac9b3a7b8dcd54fb18';
export default node;
