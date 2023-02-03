/**
 * @generated SignedSource<<7378a523c73fe304b84fe1b2dbfdc009>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutFragment$data = {
  readonly community: {
    readonly " $fragmentSpreads": FragmentRefs<"AppLayoutCommunityFragment" | "AppLayoutEntityFragment" | "EntityHTMLHeadFragment">;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"EntityHTMLHeadAppFragment">;
  readonly " $fragmentType": "CommunityLayoutFragment";
};
export type CommunityLayoutFragment$key = {
  readonly " $data"?: CommunityLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "slug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "slug"
        }
      ],
      "concreteType": "Community",
      "kind": "LinkedField",
      "name": "community",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AppLayoutCommunityFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AppLayoutEntityFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "EntityHTMLHeadFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityHTMLHeadAppFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "e42a1fa14a1dd5a7e396cd97ca73bda7";

export default node;
