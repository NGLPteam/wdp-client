/**
 * @generated SignedSource<<b9f49d1fc24578265e52c74eebd805c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FullDetailFragment$data = {
  readonly detailDefinition: {
    readonly showBody: boolean | null | undefined;
    readonly showHeroImage: boolean | null | undefined;
  };
  readonly entity: {
    readonly __typename: "Collection";
    readonly heroImage: {
      readonly storage: AttachmentStorage | null | undefined;
      readonly " $fragmentSpreads": FragmentRefs<"ContentImageFragment">;
    };
  } | {
    readonly __typename: "Item";
    readonly heroImage: {
      readonly storage: AttachmentStorage | null | undefined;
      readonly " $fragmentSpreads": FragmentRefs<"ContentImageFragment">;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly slots: {
    readonly body: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
    readonly header: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly subheader: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "FullDetailFragment";
};
export type FullDetailFragment$key = {
  readonly " $data"?: FullDetailFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FullDetailFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "heroImage",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "storage",
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ContentImageFragment"
      }
    ],
    "storageKey": null
  }
],
v1 = [
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
  "name": "FullDetailFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entity",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": (v0/*: any*/),
          "type": "Item",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v0/*: any*/),
          "type": "Collection",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "detailDefinition",
      "args": null,
      "concreteType": "DetailTemplateDefinition",
      "kind": "LinkedField",
      "name": "definition",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showBody",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showHeroImage",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "DetailTemplateInstanceSlots",
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
          "selections": (v1/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "subheader",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "body",
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
      "storageKey": null
    }
  ],
  "type": "DetailTemplateInstance",
  "abstractKey": null
};
})();

(node as any).hash = "2690dbf9a26bf460dc587403d04aea6f";

export default node;
