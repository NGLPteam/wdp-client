/**
 * @generated SignedSource<<7b80bf644a62b536a067653380ad11f7>>
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
})();

(node as any).hash = "6a3d98bffa20be36b2081ce6dad05d1f";

export default node;
