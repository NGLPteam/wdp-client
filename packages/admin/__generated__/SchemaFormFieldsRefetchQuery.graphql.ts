/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaFormFieldsRefetchQueryVariables = {
    id: string;
};
export type SchemaFormFieldsRefetchQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"SchemaFormFieldsFragment">;
    } | null;
};
export type SchemaFormFieldsRefetchQuery = {
    readonly response: SchemaFormFieldsRefetchQueryResponse;
    readonly variables: SchemaFormFieldsRefetchQueryVariables;
};



/*
query SchemaFormFieldsRefetchQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...SchemaFormFieldsFragment
    id
  }
}

fragment AssetPropertyFragment on AssetProperty {
  ...ScalarPropertyFragment
}

fragment AssetsPropertyFragment on AssetsProperty {
  ...ScalarPropertyFragment
}

fragment BooleanPropertyFragment on BooleanProperty {
  ...ScalarPropertyFragment
  checked
  checkedByDefault
}

fragment ContributorPropertyFragment on ContributorProperty {
  ...ScalarPropertyFragment
}

fragment ContributorsPropertyFragment on ContributorsProperty {
  ...ScalarPropertyFragment
}

fragment DatePropertyFragment on DateProperty {
  ...ScalarPropertyFragment
  date
}

fragment EmailPropertyFragment on EmailProperty {
  ...ScalarPropertyFragment
  address
  defaultAddress
}

fragment EntitiesPropertyFragment on EntitiesProperty {
  ...ScalarPropertyFragment
  availableEntities {
    label
    value
    entity {
      __typename
      ...getEntityTitleFragment
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}

fragment EntityPropertyFragment on EntityProperty {
  ...ScalarPropertyFragment
  availableEntities {
    label
    value
    entity {
      __typename
      ...getEntityTitleFragment
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}

fragment FloatPropertyFragment on FloatProperty {
  ...ScalarPropertyFragment
  floatValue
  defaultFloat
}

fragment FullTextPropertyFragment on FullTextProperty {
  ...ScalarPropertyFragment
  fullText {
    content
    kind
    lang
  }
}

fragment GroupPropertyFragment on GroupProperty {
  legend
  path
  properties {
    __typename
    ...SchemaPropertyFragment
  }
}

fragment IntegerPropertyFragment on IntegerProperty {
  ...ScalarPropertyFragment
  integerValue
  defaultInteger
}

fragment MarkdownPropertyFragment on MarkdownProperty {
  ...ScalarPropertyFragment
  content
  default
}

fragment MultiselectPropertyFragment on MultiselectProperty {
  ...ScalarPropertyFragment
  options {
    label
    value
  }
}

fragment ScalarPropertyFragment on ScalarProperty {
  __isScalarProperty: __typename
  name: fullPath
  label
  path
  required
  type
  isWide
}

fragment SchemaFormFieldsContextFragment on SchemaInstance {
  __isSchemaInstance: __typename
  context: schemaInstanceContext {
    ...useSchemaContextFragment
  }
  ... on Node {
    __isNode: __typename
    id
  }
}

fragment SchemaFormFieldsFragment on SchemaInstance {
  __isSchemaInstance: __typename
  properties: schemaProperties {
    __typename
    ...SchemaInstancePropertyFragment
  }
  ...SchemaSelectorDataFragment
  ...SchemaFormFieldsContextFragment
  ... on Node {
    __isNode: __typename
    id
  }
}

fragment SchemaInstancePropertyFragment on AnySchemaProperty {
  __isAnySchemaProperty: __typename
  __typename
  ... on GroupProperty {
    ...GroupPropertyFragment
  }
  ...SchemaPropertyFragment
}

fragment SchemaPropertyFragment on AnyScalarProperty {
  __isAnyScalarProperty: __typename
  __typename
  ... on AssetProperty {
    ...AssetPropertyFragment
  }
  ... on AssetsProperty {
    ...AssetsPropertyFragment
  }
  ... on BooleanProperty {
    ...BooleanPropertyFragment
  }
  ... on ContributorProperty {
    ...ContributorPropertyFragment
  }
  ... on ContributorsProperty {
    ...ContributorsPropertyFragment
  }
  ... on DateProperty {
    ...DatePropertyFragment
  }
  ... on EmailProperty {
    ...EmailPropertyFragment
  }
  ... on FloatProperty {
    ...FloatPropertyFragment
  }
  ... on IntegerProperty {
    ...IntegerPropertyFragment
  }
  ... on MarkdownProperty {
    ...MarkdownPropertyFragment
  }
  ... on MultiselectProperty {
    ...MultiselectPropertyFragment
  }
  ... on SelectProperty {
    ...SelectPropertyFragment
  }
  ... on StringProperty {
    ...StringPropertyFragment
  }
  ... on TagsProperty {
    ...TagsPropertyFragment
  }
  ... on FullTextProperty {
    ...FullTextPropertyFragment
  }
  ... on URLProperty {
    ...URLPropertyFragment
  }
  ... on VariableDateProperty {
    ...VariableDatePropertyFragment
  }
  ... on EntityProperty {
    ...EntityPropertyFragment
  }
  ... on EntitiesProperty {
    ...EntitiesPropertyFragment
  }
}

fragment SchemaSelectorDataFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    entityId: id
    schemaVersion {
      name
      number
      slug
      id
    }
  }
  ... on Item {
    entityId: id
    schemaVersion {
      name
      number
      slug
      id
    }
  }
  ... on Community {
    entityId: id
    schemaVersion {
      name
      number
      slug
      id
    }
  }
}

fragment SelectPropertyFragment on SelectProperty {
  options {
    label
    value
  }
  ...ScalarPropertyFragment
}

fragment StringPropertyFragment on StringProperty {
  ...ScalarPropertyFragment
  content
  default
}

fragment TagsPropertyFragment on TagsProperty {
  ...ScalarPropertyFragment
  tags
}

fragment URLPropertyFragment on URLProperty {
  ...ScalarPropertyFragment
  url {
    href
    label
    title
  }
}

fragment VariableDatePropertyFragment on VariableDateProperty {
  ...ScalarPropertyFragment
  dateWithPrecision {
    ...VariablePrecisionDateControlFragment
  }
}

fragment VariablePrecisionDateControlFragment on VariablePrecisionDate {
  precision
  value
}

fragment getEntityTitleFragment on Entity {
  __isEntity: __typename
  __typename
  title
  schemaVersion {
    identifier
    id
  }
  ... on Collection {
    namedAncestors {
      ancestor {
        __typename
        ... on Entity {
          __isEntity: __typename
          title
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
  ... on Item {
    namedAncestors {
      ancestor {
        __typename
        ... on Entity {
          __isEntity: __typename
          title
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
}

fragment useSchemaContextFragment on SchemaInstanceContext {
  assets {
    kind
    label
    value
  }
  contributors {
    kind
    label
    value
  }
  defaultValues
  entityId
  fieldValues
  schemaVersionSlug
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "path",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v6 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": "name",
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    (v5/*: any*/),
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "required",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isWide",
      "storageKey": null
    }
  ],
  "type": "ScalarProperty",
  "abstractKey": "__isScalarProperty"
},
v7 = [
  (v6/*: any*/)
],
v8 = {
  "kind": "InlineFragment",
  "selections": (v7/*: any*/),
  "type": "AssetProperty",
  "abstractKey": null
},
v9 = {
  "kind": "InlineFragment",
  "selections": (v7/*: any*/),
  "type": "AssetsProperty",
  "abstractKey": null
},
v10 = {
  "kind": "InlineFragment",
  "selections": [
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
    },
    (v6/*: any*/)
  ],
  "type": "BooleanProperty",
  "abstractKey": null
},
v11 = {
  "kind": "InlineFragment",
  "selections": (v7/*: any*/),
  "type": "ContributorProperty",
  "abstractKey": null
},
v12 = {
  "kind": "InlineFragment",
  "selections": (v7/*: any*/),
  "type": "ContributorsProperty",
  "abstractKey": null
},
v13 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "type": "DateProperty",
  "abstractKey": null
},
v14 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultAddress",
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "type": "EmailProperty",
  "abstractKey": null
},
v15 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "floatValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultFloat",
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "type": "FloatProperty",
  "abstractKey": null
},
v16 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "integerValue",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "defaultInteger",
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "type": "IntegerProperty",
  "abstractKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v18 = [
  (v17/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "default",
    "storageKey": null
  },
  (v6/*: any*/)
],
v19 = {
  "kind": "InlineFragment",
  "selections": (v18/*: any*/),
  "type": "MarkdownProperty",
  "abstractKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v21 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "SelectOption",
    "kind": "LinkedField",
    "name": "options",
    "plural": true,
    "selections": [
      (v5/*: any*/),
      (v20/*: any*/)
    ],
    "storageKey": null
  },
  (v6/*: any*/)
],
v22 = {
  "kind": "InlineFragment",
  "selections": (v21/*: any*/),
  "type": "MultiselectProperty",
  "abstractKey": null
},
v23 = {
  "kind": "InlineFragment",
  "selections": (v21/*: any*/),
  "type": "SelectProperty",
  "abstractKey": null
},
v24 = {
  "kind": "InlineFragment",
  "selections": (v18/*: any*/),
  "type": "StringProperty",
  "abstractKey": null
},
v25 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tags",
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "type": "TagsProperty",
  "abstractKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v27 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FullText",
      "kind": "LinkedField",
      "name": "fullText",
      "plural": false,
      "selections": [
        (v17/*: any*/),
        (v26/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lang",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "type": "FullTextProperty",
  "abstractKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v29 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "URLReference",
      "kind": "LinkedField",
      "name": "url",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "href",
          "storageKey": null
        },
        (v5/*: any*/),
        (v28/*: any*/)
      ],
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "type": "URLProperty",
  "abstractKey": null
},
v30 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "VariablePrecisionDate",
      "kind": "LinkedField",
      "name": "dateWithPrecision",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "precision",
          "storageKey": null
        },
        (v20/*: any*/)
      ],
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "type": "VariableDateProperty",
  "abstractKey": null
},
v31 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v32 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "NamedAncestor",
    "kind": "LinkedField",
    "name": "namedAncestors",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "ancestor",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v28/*: any*/)
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          (v31/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v33 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "EntitySelectOption",
    "kind": "LinkedField",
    "name": "availableEntities",
    "plural": true,
    "selections": [
      (v5/*: any*/),
      (v20/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "entity",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v28/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SchemaVersion",
                "kind": "LinkedField",
                "name": "schemaVersion",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "identifier",
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v32/*: any*/),
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v32/*: any*/),
                "type": "Item",
                "abstractKey": null
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          (v31/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  (v6/*: any*/)
],
v34 = {
  "kind": "InlineFragment",
  "selections": (v33/*: any*/),
  "type": "EntityProperty",
  "abstractKey": null
},
v35 = {
  "kind": "InlineFragment",
  "selections": (v33/*: any*/),
  "type": "EntitiesProperty",
  "abstractKey": null
},
v36 = [
  (v26/*: any*/),
  (v5/*: any*/),
  (v20/*: any*/)
],
v37 = [
  {
    "alias": "entityId",
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "SchemaVersion",
    "kind": "LinkedField",
    "name": "schemaVersion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "number",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "slug",
        "storageKey": null
      },
      (v3/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SchemaFormFieldsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SchemaFormFieldsFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SchemaFormFieldsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": "properties",
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "schemaProperties",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isAnySchemaProperty"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "legend",
                        "storageKey": null
                      },
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "properties",
                        "plural": true,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isAnyScalarProperty"
                          },
                          (v8/*: any*/),
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          (v15/*: any*/),
                          (v16/*: any*/),
                          (v19/*: any*/),
                          (v22/*: any*/),
                          (v23/*: any*/),
                          (v24/*: any*/),
                          (v25/*: any*/),
                          (v27/*: any*/),
                          (v29/*: any*/),
                          (v30/*: any*/),
                          (v34/*: any*/),
                          (v35/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "GroupProperty",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v19/*: any*/),
                      (v22/*: any*/),
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v25/*: any*/),
                      (v27/*: any*/),
                      (v29/*: any*/),
                      (v30/*: any*/),
                      (v34/*: any*/),
                      (v35/*: any*/)
                    ],
                    "type": "AnyScalarProperty",
                    "abstractKey": "__isAnyScalarProperty"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": "context",
                "args": null,
                "concreteType": "SchemaInstanceContext",
                "kind": "LinkedField",
                "name": "schemaInstanceContext",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetSelectOption",
                    "kind": "LinkedField",
                    "name": "assets",
                    "plural": true,
                    "selections": (v36/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ContributorSelectOption",
                    "kind": "LinkedField",
                    "name": "contributors",
                    "plural": true,
                    "selections": (v36/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "defaultValues",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "entityId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fieldValues",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "schemaVersionSlug",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": (v37/*: any*/),
                    "type": "Collection",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v37/*: any*/),
                    "type": "Item",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v37/*: any*/),
                    "type": "Community",
                    "abstractKey": null
                  }
                ],
                "type": "AnyEntity",
                "abstractKey": "__isAnyEntity"
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isNode"
              }
            ],
            "type": "SchemaInstance",
            "abstractKey": "__isSchemaInstance"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3ac94517ca3f7e29f3e59bb73901ba92",
    "id": null,
    "metadata": {},
    "name": "SchemaFormFieldsRefetchQuery",
    "operationKind": "query",
    "text": "query SchemaFormFieldsRefetchQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...SchemaFormFieldsFragment\n    id\n  }\n}\n\nfragment AssetPropertyFragment on AssetProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment AssetsPropertyFragment on AssetsProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment BooleanPropertyFragment on BooleanProperty {\n  ...ScalarPropertyFragment\n  checked\n  checkedByDefault\n}\n\nfragment ContributorPropertyFragment on ContributorProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment ContributorsPropertyFragment on ContributorsProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment DatePropertyFragment on DateProperty {\n  ...ScalarPropertyFragment\n  date\n}\n\nfragment EmailPropertyFragment on EmailProperty {\n  ...ScalarPropertyFragment\n  address\n  defaultAddress\n}\n\nfragment EntitiesPropertyFragment on EntitiesProperty {\n  ...ScalarPropertyFragment\n  availableEntities {\n    label\n    value\n    entity {\n      __typename\n      ...getEntityTitleFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment EntityPropertyFragment on EntityProperty {\n  ...ScalarPropertyFragment\n  availableEntities {\n    label\n    value\n    entity {\n      __typename\n      ...getEntityTitleFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment FloatPropertyFragment on FloatProperty {\n  ...ScalarPropertyFragment\n  floatValue\n  defaultFloat\n}\n\nfragment FullTextPropertyFragment on FullTextProperty {\n  ...ScalarPropertyFragment\n  fullText {\n    content\n    kind\n    lang\n  }\n}\n\nfragment GroupPropertyFragment on GroupProperty {\n  legend\n  path\n  properties {\n    __typename\n    ...SchemaPropertyFragment\n  }\n}\n\nfragment IntegerPropertyFragment on IntegerProperty {\n  ...ScalarPropertyFragment\n  integerValue\n  defaultInteger\n}\n\nfragment MarkdownPropertyFragment on MarkdownProperty {\n  ...ScalarPropertyFragment\n  content\n  default\n}\n\nfragment MultiselectPropertyFragment on MultiselectProperty {\n  ...ScalarPropertyFragment\n  options {\n    label\n    value\n  }\n}\n\nfragment ScalarPropertyFragment on ScalarProperty {\n  __isScalarProperty: __typename\n  name: fullPath\n  label\n  path\n  required\n  type\n  isWide\n}\n\nfragment SchemaFormFieldsContextFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  context: schemaInstanceContext {\n    ...useSchemaContextFragment\n  }\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n}\n\nfragment SchemaFormFieldsFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  properties: schemaProperties {\n    __typename\n    ...SchemaInstancePropertyFragment\n  }\n  ...SchemaSelectorDataFragment\n  ...SchemaFormFieldsContextFragment\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n}\n\nfragment SchemaInstancePropertyFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  __typename\n  ... on GroupProperty {\n    ...GroupPropertyFragment\n  }\n  ...SchemaPropertyFragment\n}\n\nfragment SchemaPropertyFragment on AnyScalarProperty {\n  __isAnyScalarProperty: __typename\n  __typename\n  ... on AssetProperty {\n    ...AssetPropertyFragment\n  }\n  ... on AssetsProperty {\n    ...AssetsPropertyFragment\n  }\n  ... on BooleanProperty {\n    ...BooleanPropertyFragment\n  }\n  ... on ContributorProperty {\n    ...ContributorPropertyFragment\n  }\n  ... on ContributorsProperty {\n    ...ContributorsPropertyFragment\n  }\n  ... on DateProperty {\n    ...DatePropertyFragment\n  }\n  ... on EmailProperty {\n    ...EmailPropertyFragment\n  }\n  ... on FloatProperty {\n    ...FloatPropertyFragment\n  }\n  ... on IntegerProperty {\n    ...IntegerPropertyFragment\n  }\n  ... on MarkdownProperty {\n    ...MarkdownPropertyFragment\n  }\n  ... on MultiselectProperty {\n    ...MultiselectPropertyFragment\n  }\n  ... on SelectProperty {\n    ...SelectPropertyFragment\n  }\n  ... on StringProperty {\n    ...StringPropertyFragment\n  }\n  ... on TagsProperty {\n    ...TagsPropertyFragment\n  }\n  ... on FullTextProperty {\n    ...FullTextPropertyFragment\n  }\n  ... on URLProperty {\n    ...URLPropertyFragment\n  }\n  ... on VariableDateProperty {\n    ...VariableDatePropertyFragment\n  }\n  ... on EntityProperty {\n    ...EntityPropertyFragment\n  }\n  ... on EntitiesProperty {\n    ...EntitiesPropertyFragment\n  }\n}\n\nfragment SchemaSelectorDataFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n  ... on Item {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n  ... on Community {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n}\n\nfragment SelectPropertyFragment on SelectProperty {\n  options {\n    label\n    value\n  }\n  ...ScalarPropertyFragment\n}\n\nfragment StringPropertyFragment on StringProperty {\n  ...ScalarPropertyFragment\n  content\n  default\n}\n\nfragment TagsPropertyFragment on TagsProperty {\n  ...ScalarPropertyFragment\n  tags\n}\n\nfragment URLPropertyFragment on URLProperty {\n  ...ScalarPropertyFragment\n  url {\n    href\n    label\n    title\n  }\n}\n\nfragment VariableDatePropertyFragment on VariableDateProperty {\n  ...ScalarPropertyFragment\n  dateWithPrecision {\n    ...VariablePrecisionDateControlFragment\n  }\n}\n\nfragment VariablePrecisionDateControlFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment getEntityTitleFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  schemaVersion {\n    identifier\n    id\n  }\n  ... on Collection {\n    namedAncestors {\n      ancestor {\n        __typename\n        ... on Entity {\n          __isEntity: __typename\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ... on Item {\n    namedAncestors {\n      ancestor {\n        __typename\n        ... on Entity {\n          __isEntity: __typename\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment useSchemaContextFragment on SchemaInstanceContext {\n  assets {\n    kind\n    label\n    value\n  }\n  contributors {\n    kind\n    label\n    value\n  }\n  defaultValues\n  entityId\n  fieldValues\n  schemaVersionSlug\n}\n"
  }
};
})();
(node as any).hash = 'b1e49ae1d4c198d8a55bae7e83c70d8b';
export default node;
