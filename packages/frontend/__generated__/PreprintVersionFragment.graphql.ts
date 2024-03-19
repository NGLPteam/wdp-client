/**
 * @generated SignedSource<<c82519af6ba8ee3eb9b7cdb3bb438beb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PreprintVersionFragment$data = {
  readonly prePrintVersion: {
    readonly checked?: boolean | null | undefined;
    readonly checkedByDefault?: boolean | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "PreprintVersionFragment";
};
export type PreprintVersionFragment$key = {
  readonly " $data"?: PreprintVersionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PreprintVersionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PreprintVersionFragment",
  "selections": [
    {
      "alias": "prePrintVersion",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "preprint_version"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "checked",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "checkedByDefault",
              "storageKey": null
            }
          ],
          "type": "BooleanProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"preprint_version\")"
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};

(node as any).hash = "86c9288b3aaac3f6413593995366ce24";

export default node;
