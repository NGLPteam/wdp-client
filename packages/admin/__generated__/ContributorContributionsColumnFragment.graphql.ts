/**
 * @generated SignedSource<<8a6efcbec8eed8a9d902624d2ca407c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorContributionsColumnFragment$data = {
  readonly contributionCount: number;
  readonly " $fragmentType": "ContributorContributionsColumnFragment";
};
export type ContributorContributionsColumnFragment$key = {
  readonly " $data"?: ContributorContributionsColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorContributionsColumnFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorContributionsColumnFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "contributionCount",
      "storageKey": null
    }
  ],
  "type": "Contributor",
  "abstractKey": "__isContributor"
};

(node as any).hash = "4a99393c668c49859bd1354d7776526a";

export default node;
