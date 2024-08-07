/**
 * @generated SignedSource<<84fdfe35d0ce358ecef7c43e7420c6c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BooleanPropertyFragment$data = {
  readonly checked: boolean | null | undefined;
  readonly checkedByDefault: boolean | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "BooleanPropertyFragment";
};
export type BooleanPropertyFragment$key = {
  readonly " $data"?: BooleanPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BooleanPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BooleanPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "checked",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "checkedByDefault",
      "storageKey": null
    }
  ],
  "type": "BooleanProperty",
  "abstractKey": null
};

(node as any).hash = "34f292394556d1f07d4a91bc14a1cda0";

export default node;
