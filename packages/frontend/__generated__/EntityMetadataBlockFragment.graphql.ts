/**
 * @generated SignedSource<<4cb2e625fc2174de0d957f2a9be00b38>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type MetadataBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityMetadataBlockFragment$data = {
  readonly definition: {
    readonly background: MetadataBackground | null | undefined;
  };
  readonly slots: {
    readonly header: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "EntityMetadataBlockFragment";
};
export type EntityMetadataBlockFragment$key = {
  readonly " $data"?: EntityMetadataBlockFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityMetadataBlockFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityMetadataBlockFragment",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MetadataTemplateInstance",
  "abstractKey": null
};

(node as any).hash = "d17da811fb12f461a3d0dc7ffcf1b8dc";

export default node;
