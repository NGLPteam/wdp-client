/**
 * @generated SignedSource<<0dad45e76a146c3498678abd3975dee5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityUpdateFormFragment$data = {
  readonly communityId: string;
  readonly context: {
    readonly " $fragmentSpreads": FragmentRefs<"useSchemaContextFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"CommunityUpdateFormFieldsFragment" | "SchemaFormFieldsFragment" | "useSchemaPropertiesFragment">;
  readonly " $fragmentType": "CommunityUpdateFormFragment";
};
export type CommunityUpdateFormFragment$key = {
  readonly " $data"?: CommunityUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityUpdateFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityUpdateFormFragment",
  "selections": [
    {
      "alias": "communityId",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityUpdateFormFieldsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SchemaFormFieldsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useSchemaPropertiesFragment"
    },
    {
      "alias": "context",
      "args": null,
      "concreteType": "SchemaInstanceContext",
      "kind": "LinkedField",
      "name": "schemaInstanceContext",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "useSchemaContextFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};

(node as any).hash = "8f90f19a4c82db53f70bd466cc89c05b";

export default node;
