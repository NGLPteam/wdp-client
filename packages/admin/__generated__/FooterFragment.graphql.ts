/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FooterFragment = {
    readonly site: {
        readonly footer: {
            readonly copyrightStatement: string;
            readonly description: string;
        };
    };
    readonly " $refType": "FooterFragment";
};
export type FooterFragment$data = FooterFragment;
export type FooterFragment$key = {
    readonly " $data"?: FooterFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FooterFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FooterFragment",
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
          "concreteType": "SiteFooter",
          "kind": "LinkedField",
          "name": "footer",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "copyrightStatement",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "description",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "GlobalConfiguration",
  "abstractKey": null
};
(node as any).hash = 'e1d0747a2a12c7c322d9147535873e3a';
export default node;
