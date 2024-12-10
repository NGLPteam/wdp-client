/**
 * @generated SignedSource<<8d15f3f201a18d108edc9a0ac0ed973e>>
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
    readonly showISSN: boolean | null | undefined;
    readonly showSplitDisplay: boolean | null | undefined;
  };
  readonly entity: {
    readonly assetDownloads?: {
      readonly " $fragmentSpreads": FragmentRefs<"DownloadCountFragment">;
    };
    readonly entityViews?: {
      readonly " $fragmentSpreads": FragmentRefs<"ViewCountFragment">;
    };
    readonly " $fragmentSpreads": FragmentRefs<"DOIFragment" | "ISSNFragment">;
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

const node: ReaderFragment = {
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "DOIFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ISSNFragment"
        },
        {
          "kind": "InlineFragment",
          "selections": [
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
          ],
          "type": "Item",
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
          "name": "showISSN",
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

(node as any).hash = "87123924f850c214792d1068258a8a1e";

export default node;
