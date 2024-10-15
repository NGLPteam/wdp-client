/**
 * @generated SignedSource<<0478cb62f4981bc20201c94efe51edc3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FactoryTemplatesFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"HeroTemplateFragment">;
  readonly " $fragmentType": "FactoryTemplatesFragment";
};
export type FactoryTemplatesFragment$key = {
  readonly " $data"?: FactoryTemplatesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FactoryTemplatesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FactoryTemplatesFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "HeroTemplateFragment"
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "03ab5bade4786544a8cdeca65fd2e9b7";

export default node;
