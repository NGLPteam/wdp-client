/**
 * @generated SignedSource<<4821cd56836eccde80eb5b91ff1a5b50>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailSidebarFragment$data = {
  readonly assetDownloads?: {
    readonly " $fragmentSpreads": FragmentRefs<"DownloadCountFragment">;
  };
  readonly entityViews?: {
    readonly " $fragmentSpreads": FragmentRefs<"ViewCountFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"DOIFragment" | "ISSNFragment">;
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

(node as any).hash = "643317f400bdf6fe61d388caaf11a027";

export default node;
