/**
 * @generated SignedSource<<24bf41b0aed6edfc9e4727479e11c623>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OpenAccessFragment$data = {
  readonly openAccess: {
    readonly checked?: boolean | null | undefined;
    readonly checkedByDefault?: boolean | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "OpenAccessFragment";
};
export type OpenAccessFragment$key = {
  readonly " $data"?: OpenAccessFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"OpenAccessFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OpenAccessFragment",
  "selections": [
    {
      "alias": "openAccess",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "open_access"
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
      "storageKey": "schemaProperty(fullPath:\"open_access\")"
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};

(node as any).hash = "f3ff42725c3dce5ecda6ada561f0e72e";

export default node;
