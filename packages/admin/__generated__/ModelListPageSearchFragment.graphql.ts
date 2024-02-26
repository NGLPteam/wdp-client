/**
 * @generated SignedSource<<1b046a1702beb4b5b5ca02fb691cfddd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ModelListPageSearchFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CurrentSearchFiltersFragment" | "SearchWithFiltersFragment">;
  readonly " $fragmentType": "ModelListPageSearchFragment";
};
export type ModelListPageSearchFragment$key = {
  readonly " $data"?: ModelListPageSearchFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageSearchFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ModelListPageSearchFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CurrentSearchFiltersFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchWithFiltersFragment"
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};

(node as any).hash = "56923e286328361257e85b0c47115442";

export default node;
