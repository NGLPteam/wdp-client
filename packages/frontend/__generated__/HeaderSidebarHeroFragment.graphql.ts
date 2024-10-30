/**
 * @generated SignedSource<<e2168fd86857052c3a6e9be72cf73db3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderSidebarHeroFragment$data = {
  readonly assetDownloads?: {
    readonly " $fragmentSpreads": FragmentRefs<"DownloadCountFragment">;
  };
  readonly entityViews?: {
    readonly " $fragmentSpreads": FragmentRefs<"ViewCountFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"DOIFragment" | "ISSNFragment">;
  readonly " $fragmentType": "HeaderSidebarHeroFragment";
};
export type HeaderSidebarHeroFragment$key = {
  readonly " $data"?: HeaderSidebarHeroFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderSidebarHeroFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeaderSidebarHeroFragment",
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
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "3b7e0dd5e92b0306540a300d87d21fe7";

export default node;
