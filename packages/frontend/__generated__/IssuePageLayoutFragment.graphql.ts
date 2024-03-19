/**
 * @generated SignedSource<<5c78c68a6fc6a17dcc33af8cda28fbfd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssuePageLayoutFragment$data = {
  readonly body: string;
  readonly heroImage: {
    readonly " $fragmentSpreads": FragmentRefs<"ContentImageFragment">;
  };
  readonly title: string;
  readonly " $fragmentType": "IssuePageLayoutFragment";
};
export type IssuePageLayoutFragment$key = {
  readonly " $data"?: IssuePageLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssuePageLayoutFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssuePageLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ImageAttachment",
      "kind": "LinkedField",
      "name": "heroImage",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContentImageFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Page",
  "abstractKey": null
};

(node as any).hash = "044a64635a3daab28cdb1e98db078960";

export default node;
