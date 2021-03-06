/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type GlobalContextFragment = {
    readonly globalConfiguration: {
        readonly " $fragmentRefs": FragmentRefs<"ProviderBarFragment" | "InstallationNameFragment" | "UnauthorizedMessageFragment" | "FooterFragment" | "InstallationLogoFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"SchemaSelectorSchemasFragment">;
    readonly " $refType": "GlobalContextFragment";
};
export type GlobalContextFragment$data = GlobalContextFragment;
export type GlobalContextFragment$key = {
    readonly " $data"?: GlobalContextFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"GlobalContextFragment">;
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
      ]
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'cf89f641e87bc805a335858cd96e6976';
export default node;
