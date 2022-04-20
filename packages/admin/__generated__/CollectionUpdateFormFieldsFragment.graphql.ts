/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityVisibility = "HIDDEN" | "LIMITED" | "VISIBLE" | "%future added value";
export type CollectionUpdateFormFieldsFragment = {
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
    readonly " $refType": "CollectionUpdateFormFieldsFragment";
};
export type CollectionUpdateFormFieldsFragment$data = CollectionUpdateFormFieldsFragment;
export type CollectionUpdateFormFieldsFragment$key = {
    readonly " $data"?: CollectionUpdateFormFieldsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionUpdateFormFieldsFragment">;
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
  "name": "CollectionUpdateFormFieldsFragment",
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
  "type": "Collection",
  "abstractKey": null
};
})();
(node as any).hash = '7805ff0459464511c3bbf2c8abf733d4';
export default node;
