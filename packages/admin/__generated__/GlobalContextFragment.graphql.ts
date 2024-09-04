/**
 * @generated SignedSource<<1ccca43914a578c967d97cdff3f411fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GlobalContextFragment$data = {
  readonly globalConfiguration: {
    readonly entities: {
      readonly suppressExternalLinks: boolean;
    };
    readonly " $fragmentSpreads": FragmentRefs<"FooterFragment" | "InstallationLogoFragment" | "InstallationNameFragment" | "ProviderBarFragment" | "UnauthorizedMessageFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"SchemaSelectorSchemasFragment">;
  readonly " $fragmentType": "GlobalContextFragment";
};
export type GlobalContextFragment$key = {
  readonly " $data"?: GlobalContextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GlobalContextFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GlobalContextFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GlobalConfiguration",
      "kind": "LinkedField",
      "name": "globalConfiguration",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ProviderBarFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "InstallationNameFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "UnauthorizedMessageFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FooterFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "InstallationLogoFragment"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "EntitiesSettings",
          "kind": "LinkedField",
          "name": "entities",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "suppressExternalLinks",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "SchemaSelectorSchemasFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SchemaVersionConnection",
          "kind": "LinkedField",
          "name": "schemaVersions",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "SchemaVersion",
              "kind": "LinkedField",
              "name": "nodes",
              "plural": true,
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
                  "name": "kind",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "SchemaSelectorModalOptionsFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "args": null,
      "argumentDefinitions": []
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "d0abf95579813da70bb902ee84942c80";

export default node;
