/**
 * @generated SignedSource<<0b52e79d8066ea362567e9c2d78038d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityOrderSelectFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly identifier: string;
      readonly name: string | null | undefined;
    };
  }>;
  readonly " $fragmentType": "EntityOrderSelectFragment";
};
export type EntityOrderSelectFragment$key = {
  readonly " $data"?: EntityOrderSelectFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderSelectFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderSelectFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Ordering",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "identifier",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "OrderingConnection",
  "abstractKey": null
};

(node as any).hash = "b374150022ecb5c4a4298027334687a9";

export default node;
