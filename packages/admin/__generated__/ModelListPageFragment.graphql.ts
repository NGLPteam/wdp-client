/**
 * @generated SignedSource<<8f2c71cedcbf75a8bbf8d049edfd226b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ModelListPageFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ModelPageCountActionsFragment" | "ModelPaginationFragment">;
  readonly " $fragmentType": "ModelListPageFragment";
};
export type ModelListPageFragment$key = {
  readonly " $data"?: ModelListPageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ModelListPageFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPageCountActionsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelPaginationFragment"
    }
  ],
  "type": "Paginated",
  "abstractKey": "__isPaginated"
};

(node as any).hash = "c70fd573a1bca336f61cdd2ffac055bc";

export default node;
