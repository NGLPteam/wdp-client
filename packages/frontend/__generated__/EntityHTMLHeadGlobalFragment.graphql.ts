/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityHTMLHeadGlobalFragment = {
    readonly site: {
        readonly installationName: string;
    };
    readonly " $refType": "EntityHTMLHeadGlobalFragment";
};
export type EntityHTMLHeadGlobalFragment$data = EntityHTMLHeadGlobalFragment;
export type EntityHTMLHeadGlobalFragment$key = {
    readonly " $data"?: EntityHTMLHeadGlobalFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityHTMLHeadGlobalFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityHTMLHeadGlobalFragment",
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
(node as any).hash = '6488e903c17dad0fe9d8b80feace58e7';
export default node;
