/**
 * @generated SignedSource<<44146c5ebfca867c133bea5f9387dfa4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HtmlHeadFragment$data = {
  readonly site: {
    readonly installationName: string;
  };
  readonly " $fragmentType": "HtmlHeadFragment";
};
export type HtmlHeadFragment$key = {
  readonly " $data"?: HtmlHeadFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HtmlHeadFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HtmlHeadFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SiteSettings",
      "kind": "LinkedField",
      "name": "site",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "installationName",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GlobalConfiguration",
  "abstractKey": null
};

(node as any).hash = "6cc81cf95916f3a7b3b7ca14c0b6dde8";

export default node;
