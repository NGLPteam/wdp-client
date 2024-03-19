/**
 * @generated SignedSource<<daf9f660abba8c5b3db3ae1d2a0d0d38>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type EntityKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type BreadcrumbLinkFragment$data = {
  readonly kind: EntityKind;
  readonly label: string;
  readonly slug: string;
  readonly " $fragmentType": "BreadcrumbLinkFragment";
};
export type BreadcrumbLinkFragment$key = {
  readonly " $data"?: BreadcrumbLinkFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbLinkFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BreadcrumbLinkFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "kind",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "EntityBreadcrumb",
  "abstractKey": null
};

(node as any).hash = "fe0d70865c6d6c10b4ebaab910d89831";

export default node;
