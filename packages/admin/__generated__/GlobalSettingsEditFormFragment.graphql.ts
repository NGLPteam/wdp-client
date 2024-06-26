/**
 * @generated SignedSource<<102ec92ad84cf7f70e60211ba1de62d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type SiteLogoMode = "NONE" | "SANS_TEXT" | "WITH_TEXT" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type GlobalSettingsEditFormFragment$data = {
  readonly logo: {
    readonly " $fragmentSpreads": FragmentRefs<"SiteLogoUploadFragment">;
  };
  readonly site: {
    readonly footer: {
      readonly copyrightStatement: string;
      readonly description: string;
    };
    readonly installationHomePageCopy: string;
    readonly installationName: string;
    readonly logoMode: SiteLogoMode;
    readonly providerName: string;
  };
  readonly theme: {
    readonly color: string;
    readonly font: string;
  };
  readonly " $fragmentType": "GlobalSettingsEditFormFragment";
};
export type GlobalSettingsEditFormFragment$key = {
  readonly " $data"?: GlobalSettingsEditFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GlobalSettingsEditFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GlobalSettingsEditFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SiteSettings",
      "kind": "LinkedField",
      "name": "site",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "providerName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "installationName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "installationHomePageCopy",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SiteFooter",
          "kind": "LinkedField",
          "name": "footer",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "description",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "copyrightStatement",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "logoMode",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ThemeSettings",
      "kind": "LinkedField",
      "name": "theme",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "color",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "font",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "SiteLogoAttachment",
      "kind": "LinkedField",
      "name": "logo",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SiteLogoUploadFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GlobalConfiguration",
  "abstractKey": null
};

(node as any).hash = "68466ff87c0c38065073a60b36af424b";

export default node;
