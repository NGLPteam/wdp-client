/**
 * @generated SignedSource<<d0e89d0a8a2bf04490e9e468456ad6b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HeroImageLayout = "ONE_COLUMN" | "TWO_COLUMN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CommunityUpdateFormFieldsFragment$data = {
  readonly heroImage: {
    readonly " $fragmentSpreads": FragmentRefs<"FileUploadFragment">;
  };
  readonly heroImageLayout: HeroImageLayout;
  readonly heroImageMetadata: {
    readonly alt: string | null | undefined;
  } | null | undefined;
  readonly logo: {
    readonly " $fragmentSpreads": FragmentRefs<"FileUploadFragment">;
  };
  readonly position: number | null | undefined;
  readonly summary: string | null | undefined;
  readonly tagline: string | null | undefined;
  readonly title: string;
  readonly " $fragmentType": "CommunityUpdateFormFieldsFragment";
};
export type CommunityUpdateFormFieldsFragment$key = {
  readonly " $data"?: CommunityUpdateFormFieldsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityUpdateFormFieldsFragment">;
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
  "name": "CommunityUpdateFormFieldsFragment",
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
      "name": "tagline",
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
      "name": "heroImageLayout",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "position",
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
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "logo",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageMetadata",
      "kind": "LinkedField",
      "name": "heroImageMetadata",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "alt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
})();

(node as any).hash = "65370ec9f077bb21b16803da1bf2f955";

export default node;
