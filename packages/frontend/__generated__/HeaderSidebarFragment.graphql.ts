/**
 * @generated SignedSource<<a16b9c34ba005155e7eb2936b684b425>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderSidebarFragment$data = {
  readonly definition: {
    readonly showBasicViewMetrics: boolean | null | undefined;
    readonly showDOI: boolean | null | undefined;
    readonly showSplitDisplay: boolean | null | undefined;
  };
  readonly entity: {
    readonly assetDownloads?: {
      readonly " $fragmentSpreads": FragmentRefs<"DownloadCountFragment">;
    };
    readonly doiData?: {
      readonly doi: string | null | undefined;
    };
    readonly entityViews?: {
      readonly " $fragmentSpreads": FragmentRefs<"ViewCountFragment">;
    };
    readonly " $fragmentSpreads": FragmentRefs<"DOIFragment">;
  };
  readonly slots: {
    readonly headerSidebar: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "HeaderSidebarFragment";
};
export type HeaderSidebarFragment$key = {
  readonly " $data"?: HeaderSidebarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderSidebarFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AnalyticsEventCountSummary",
    "kind": "LinkedField",
    "name": "entityViews",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ViewCountFragment"
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "AnalyticsEventCountSummary",
    "kind": "LinkedField",
    "name": "assetDownloads",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "DownloadCountFragment"
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeaderSidebarFragment",
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
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "DOIData",
              "kind": "LinkedField",
              "name": "doiData",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "doi",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "HasDOI",
          "abstractKey": "__isHasDOI"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DOIFragment"
        },
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
      "alias": null,
      "args": null,
      "concreteType": "HeroTemplateDefinition",
      "kind": "LinkedField",
      "name": "definition",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showDOI",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showBasicViewMetrics",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "showSplitDisplay",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HeroTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "headerSidebar",
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
  "type": "HeroTemplateInstance",
  "abstractKey": null
};
})();

(node as any).hash = "705665d0116bd2d2541cf933873e9204";

export default node;
