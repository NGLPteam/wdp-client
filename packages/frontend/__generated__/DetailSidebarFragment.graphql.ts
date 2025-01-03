/**
 * @generated SignedSource<<7444839ea4dbeabb8e6453fba54f738b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailSidebarFragment$data = {
  readonly definition: {
    readonly showBasicViewMetrics: boolean | null | undefined;
    readonly showDOI: boolean | null | undefined;
    readonly showISSN: boolean | null | undefined;
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
    readonly sidebar: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "DetailSidebarFragment";
};
export type DetailSidebarFragment$key = {
  readonly " $data"?: DetailSidebarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DetailSidebarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailSidebarFragment",
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
          "name": "sidebar",
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

(node as any).hash = "f5d33faf72d090d7820c6c89abc023bf";

export default node;
