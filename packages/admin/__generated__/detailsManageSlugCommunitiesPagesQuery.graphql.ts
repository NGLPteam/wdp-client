/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type detailsManageSlugCommunitiesPagesQueryVariables = {
    communitySlug: string;
};
export type detailsManageSlugCommunitiesPagesQueryResponse = {
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"CommunityUpdateFormFragment" | "CommunityLayoutQueryFragment">;
    } | null;
};
export type detailsManageSlugCommunitiesPagesQuery = {
    readonly response: detailsManageSlugCommunitiesPagesQueryResponse;
    readonly variables: detailsManageSlugCommunitiesPagesQueryVariables;
};



/*
query detailsManageSlugCommunitiesPagesQuery(
  $communitySlug: Slug!
) {
  community(slug: $communitySlug) {
    ...CommunityUpdateFormFragment
    ...CommunityLayoutQueryFragment
    id
  }
}

fragment AssetPropertyFragment on AssetProperty {
  ...ScalarPropertyFragment
}

fragment AssetsPropertyFragment on AssetsProperty {
  ...ScalarPropertyFragment
}

fragment AuthContextFragment on Entity {
  __isEntity: __typename
  allowedActions
}

fragment BooleanPropertyFragment on BooleanProperty {
  ...ScalarPropertyFragment
  checked
  checkedByDefault
}

fragment CommunityLayoutFragment on Community {
  id
  name
  slug
  allowedActions
  ...useChildRouteLinksFragment
}

fragment CommunityLayoutQueryFragment on Community {
  ...CommunityLayoutFragment
  ...AuthContextFragment
}

fragment CommunityUpdateFormFieldsFragment on Community {
  title
  tagline
  summary
  heroImageLayout
  heroImage {
    ...FileUploadFragment
  }
  logo {
    ...FileUploadFragment
  }
  heroImageMetadata {
    alt
  }
}

fragment CommunityUpdateFormFragment on Community {
  communityId: id
  ...CommunityUpdateFormFieldsFragment
  ...SchemaFormFieldsFragment
  ...useSchemaPropertiesFragment
  context: schemaInstanceContext {
    ...useSchemaContextFragment
  }
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

fragment FileUploadFragment on ImageAttachment {
  originalFilename
  storage
  thumb {
    png {
      alt
      url
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
}

fragment SchemaFormFieldsFragment on SchemaInstance {
  __isSchemaInstance: __typename
  properties: schemaProperties {
    __typename
    ...SchemaInstancePropertyFragment
  }
  ...SchemaSelectorDataFragment
  ...SchemaFormFieldsContextFragment
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

fragment useChildRouteLinksFragment on Entity {
  __isEntity: __typename
  allowedActions
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

fragment useSchemaPropertiesFragment on SchemaInstance {
  __isSchemaInstance: __typename
  properties: schemaProperties {
    __typename
    ... on SchemaProperty {
      __isSchemaProperty: __typename
      fullPath
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "communitySlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "communitySlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "originalFilename",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "storage",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageSize",
    "kind": "LinkedField",
    "name": "thumb",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ImageDerivative",
        "kind": "LinkedField",
        "name": "png",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "url",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v8 = [
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "path",
  "storageKey": null
},
v14 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": "name",
      "args": null,
      "kind": "ScalarField",
      "name": "fullPath",
      "storageKey": null
    },
    (v6/*: any*/),
    (v13/*: any*/),
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
v15 = [
  (v14/*: any*/)
],
v16 = {
  "kind": "InlineFragment",
  "selections": (v15/*: any*/),
  "type": "AssetProperty",
  "abstractKey": null
},
v17 = {
  "kind": "InlineFragment",
  "selections": (v15/*: any*/),
  "type": "AssetsProperty",
  "abstractKey": null
},
v18 = {
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
    (v14/*: any*/)
  ],
  "type": "BooleanProperty",
  "abstractKey": null
},
v19 = {
  "kind": "InlineFragment",
  "selections": (v15/*: any*/),
  "type": "ContributorProperty",
  "abstractKey": null
},
v20 = {
  "kind": "InlineFragment",
  "selections": (v15/*: any*/),
  "type": "ContributorsProperty",
  "abstractKey": null
},
v21 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    },
    (v14/*: any*/)
  ],
  "type": "DateProperty",
  "abstractKey": null
},
v22 = {
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
    (v14/*: any*/)
  ],
  "type": "EmailProperty",
  "abstractKey": null
},
v23 = {
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
    (v14/*: any*/)
  ],
  "type": "FloatProperty",
  "abstractKey": null
},
v24 = {
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
    (v14/*: any*/)
  ],
  "type": "IntegerProperty",
  "abstractKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v26 = [
  (v25/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "default",
    "storageKey": null
  },
  (v14/*: any*/)
],
v27 = {
  "kind": "InlineFragment",
  "selections": (v26/*: any*/),
  "type": "MarkdownProperty",
  "abstractKey": null
},
v28 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "SelectOption",
    "kind": "LinkedField",
    "name": "options",
    "plural": true,
    "selections": [
      (v6/*: any*/),
      (v7/*: any*/)
    ],
    "storageKey": null
  },
  (v14/*: any*/)
],
v29 = {
  "kind": "InlineFragment",
  "selections": (v28/*: any*/),
  "type": "MultiselectProperty",
  "abstractKey": null
},
v30 = {
  "kind": "InlineFragment",
  "selections": (v28/*: any*/),
  "type": "SelectProperty",
  "abstractKey": null
},
v31 = {
  "kind": "InlineFragment",
  "selections": (v26/*: any*/),
  "type": "StringProperty",
  "abstractKey": null
},
v32 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tags",
      "storageKey": null
    },
    (v14/*: any*/)
  ],
  "type": "TagsProperty",
  "abstractKey": null
},
v33 = {
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
        (v25/*: any*/),
        (v5/*: any*/),
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
    (v14/*: any*/)
  ],
  "type": "FullTextProperty",
  "abstractKey": null
},
v34 = {
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
        (v6/*: any*/),
        (v2/*: any*/)
      ],
      "storageKey": null
    },
    (v14/*: any*/)
  ],
  "type": "URLProperty",
  "abstractKey": null
},
v35 = {
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
        (v7/*: any*/)
      ],
      "storageKey": null
    },
    (v14/*: any*/)
  ],
  "type": "VariableDateProperty",
  "abstractKey": null
},
v36 = {
  "kind": "InlineFragment",
  "selections": [
    (v9/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v37 = [
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
          (v12/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/)
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          (v36/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v38 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "EntitySelectOption",
    "kind": "LinkedField",
    "name": "availableEntities",
    "plural": true,
    "selections": [
      (v6/*: any*/),
      (v7/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "entity",
        "plural": false,
        "selections": [
          (v12/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
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
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
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
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          },
          (v36/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  (v14/*: any*/)
],
v39 = {
  "kind": "InlineFragment",
  "selections": (v38/*: any*/),
  "type": "EntityProperty",
  "abstractKey": null
},
v40 = {
  "kind": "InlineFragment",
  "selections": (v38/*: any*/),
  "type": "EntitiesProperty",
  "abstractKey": null
},
v41 = [
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
      (v10/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "number",
        "storageKey": null
      },
      (v11/*: any*/),
      (v9/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "detailsManageSlugCommunitiesPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityUpdateFormFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityLayoutQueryFragment"
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
    "name": "detailsManageSlugCommunitiesPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "alias": "communityId",
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tagline",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "summary",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "heroImageLayout",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "heroImage",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageAttachment",
            "kind": "LinkedField",
            "name": "logo",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageMetadata",
            "kind": "LinkedField",
            "name": "heroImageMetadata",
            "plural": false,
            "selections": [
              (v3/*: any*/)
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
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ContributorSelectOption",
                "kind": "LinkedField",
                "name": "contributors",
                "plural": true,
                "selections": (v8/*: any*/),
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
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "allowedActions",
            "storageKey": null
          },
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
                  (v12/*: any*/),
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
                      (v13/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "properties",
                        "plural": true,
                        "selections": [
                          (v12/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isAnyScalarProperty"
                          },
                          (v16/*: any*/),
                          (v17/*: any*/),
                          (v18/*: any*/),
                          (v19/*: any*/),
                          (v20/*: any*/),
                          (v21/*: any*/),
                          (v22/*: any*/),
                          (v23/*: any*/),
                          (v24/*: any*/),
                          (v27/*: any*/),
                          (v29/*: any*/),
                          (v30/*: any*/),
                          (v31/*: any*/),
                          (v32/*: any*/),
                          (v33/*: any*/),
                          (v34/*: any*/),
                          (v35/*: any*/),
                          (v39/*: any*/),
                          (v40/*: any*/)
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
                      (v16/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v20/*: any*/),
                      (v21/*: any*/),
                      (v22/*: any*/),
                      (v23/*: any*/),
                      (v24/*: any*/),
                      (v27/*: any*/),
                      (v29/*: any*/),
                      (v30/*: any*/),
                      (v31/*: any*/),
                      (v32/*: any*/),
                      (v33/*: any*/),
                      (v34/*: any*/),
                      (v35/*: any*/),
                      (v39/*: any*/),
                      (v40/*: any*/)
                    ],
                    "type": "AnyScalarProperty",
                    "abstractKey": "__isAnyScalarProperty"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "fullPath",
                        "storageKey": null
                      }
                    ],
                    "type": "SchemaProperty",
                    "abstractKey": "__isSchemaProperty"
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": (v41/*: any*/),
                    "type": "Collection",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v41/*: any*/),
                    "type": "Item",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": (v41/*: any*/),
                    "type": "Community",
                    "abstractKey": null
                  }
                ],
                "type": "AnyEntity",
                "abstractKey": "__isAnyEntity"
              }
            ],
            "type": "SchemaInstance",
            "abstractKey": "__isSchemaInstance"
          },
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isEntity"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "589e2347e872d359e64e522378f69e2a",
    "id": null,
    "metadata": {},
    "name": "detailsManageSlugCommunitiesPagesQuery",
    "operationKind": "query",
    "text": "query detailsManageSlugCommunitiesPagesQuery(\n  $communitySlug: Slug!\n) {\n  community(slug: $communitySlug) {\n    ...CommunityUpdateFormFragment\n    ...CommunityLayoutQueryFragment\n    id\n  }\n}\n\nfragment AssetPropertyFragment on AssetProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment AssetsPropertyFragment on AssetsProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment AuthContextFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment BooleanPropertyFragment on BooleanProperty {\n  ...ScalarPropertyFragment\n  checked\n  checkedByDefault\n}\n\nfragment CommunityLayoutFragment on Community {\n  id\n  name\n  slug\n  allowedActions\n  ...useChildRouteLinksFragment\n}\n\nfragment CommunityLayoutQueryFragment on Community {\n  ...CommunityLayoutFragment\n  ...AuthContextFragment\n}\n\nfragment CommunityUpdateFormFieldsFragment on Community {\n  title\n  tagline\n  summary\n  heroImageLayout\n  heroImage {\n    ...FileUploadFragment\n  }\n  logo {\n    ...FileUploadFragment\n  }\n  heroImageMetadata {\n    alt\n  }\n}\n\nfragment CommunityUpdateFormFragment on Community {\n  communityId: id\n  ...CommunityUpdateFormFieldsFragment\n  ...SchemaFormFieldsFragment\n  ...useSchemaPropertiesFragment\n  context: schemaInstanceContext {\n    ...useSchemaContextFragment\n  }\n}\n\nfragment ContributorPropertyFragment on ContributorProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment ContributorsPropertyFragment on ContributorsProperty {\n  ...ScalarPropertyFragment\n}\n\nfragment DatePropertyFragment on DateProperty {\n  ...ScalarPropertyFragment\n  date\n}\n\nfragment EmailPropertyFragment on EmailProperty {\n  ...ScalarPropertyFragment\n  address\n  defaultAddress\n}\n\nfragment EntitiesPropertyFragment on EntitiesProperty {\n  ...ScalarPropertyFragment\n  availableEntities {\n    label\n    value\n    entity {\n      __typename\n      ...getEntityTitleFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment EntityPropertyFragment on EntityProperty {\n  ...ScalarPropertyFragment\n  availableEntities {\n    label\n    value\n    entity {\n      __typename\n      ...getEntityTitleFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment FileUploadFragment on ImageAttachment {\n  originalFilename\n  storage\n  thumb {\n    png {\n      alt\n      url\n    }\n  }\n}\n\nfragment FloatPropertyFragment on FloatProperty {\n  ...ScalarPropertyFragment\n  floatValue\n  defaultFloat\n}\n\nfragment FullTextPropertyFragment on FullTextProperty {\n  ...ScalarPropertyFragment\n  fullText {\n    content\n    kind\n    lang\n  }\n}\n\nfragment GroupPropertyFragment on GroupProperty {\n  legend\n  path\n  properties {\n    __typename\n    ...SchemaPropertyFragment\n  }\n}\n\nfragment IntegerPropertyFragment on IntegerProperty {\n  ...ScalarPropertyFragment\n  integerValue\n  defaultInteger\n}\n\nfragment MarkdownPropertyFragment on MarkdownProperty {\n  ...ScalarPropertyFragment\n  content\n  default\n}\n\nfragment MultiselectPropertyFragment on MultiselectProperty {\n  ...ScalarPropertyFragment\n  options {\n    label\n    value\n  }\n}\n\nfragment ScalarPropertyFragment on ScalarProperty {\n  __isScalarProperty: __typename\n  name: fullPath\n  label\n  path\n  required\n  type\n  isWide\n}\n\nfragment SchemaFormFieldsContextFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  context: schemaInstanceContext {\n    ...useSchemaContextFragment\n  }\n}\n\nfragment SchemaFormFieldsFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  properties: schemaProperties {\n    __typename\n    ...SchemaInstancePropertyFragment\n  }\n  ...SchemaSelectorDataFragment\n  ...SchemaFormFieldsContextFragment\n}\n\nfragment SchemaInstancePropertyFragment on AnySchemaProperty {\n  __isAnySchemaProperty: __typename\n  __typename\n  ... on GroupProperty {\n    ...GroupPropertyFragment\n  }\n  ...SchemaPropertyFragment\n}\n\nfragment SchemaPropertyFragment on AnyScalarProperty {\n  __isAnyScalarProperty: __typename\n  __typename\n  ... on AssetProperty {\n    ...AssetPropertyFragment\n  }\n  ... on AssetsProperty {\n    ...AssetsPropertyFragment\n  }\n  ... on BooleanProperty {\n    ...BooleanPropertyFragment\n  }\n  ... on ContributorProperty {\n    ...ContributorPropertyFragment\n  }\n  ... on ContributorsProperty {\n    ...ContributorsPropertyFragment\n  }\n  ... on DateProperty {\n    ...DatePropertyFragment\n  }\n  ... on EmailProperty {\n    ...EmailPropertyFragment\n  }\n  ... on FloatProperty {\n    ...FloatPropertyFragment\n  }\n  ... on IntegerProperty {\n    ...IntegerPropertyFragment\n  }\n  ... on MarkdownProperty {\n    ...MarkdownPropertyFragment\n  }\n  ... on MultiselectProperty {\n    ...MultiselectPropertyFragment\n  }\n  ... on SelectProperty {\n    ...SelectPropertyFragment\n  }\n  ... on StringProperty {\n    ...StringPropertyFragment\n  }\n  ... on TagsProperty {\n    ...TagsPropertyFragment\n  }\n  ... on FullTextProperty {\n    ...FullTextPropertyFragment\n  }\n  ... on URLProperty {\n    ...URLPropertyFragment\n  }\n  ... on VariableDateProperty {\n    ...VariableDatePropertyFragment\n  }\n  ... on EntityProperty {\n    ...EntityPropertyFragment\n  }\n  ... on EntitiesProperty {\n    ...EntitiesPropertyFragment\n  }\n}\n\nfragment SchemaSelectorDataFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n  ... on Item {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n  ... on Community {\n    entityId: id\n    schemaVersion {\n      name\n      number\n      slug\n      id\n    }\n  }\n}\n\nfragment SelectPropertyFragment on SelectProperty {\n  options {\n    label\n    value\n  }\n  ...ScalarPropertyFragment\n}\n\nfragment StringPropertyFragment on StringProperty {\n  ...ScalarPropertyFragment\n  content\n  default\n}\n\nfragment TagsPropertyFragment on TagsProperty {\n  ...ScalarPropertyFragment\n  tags\n}\n\nfragment URLPropertyFragment on URLProperty {\n  ...ScalarPropertyFragment\n  url {\n    href\n    label\n    title\n  }\n}\n\nfragment VariableDatePropertyFragment on VariableDateProperty {\n  ...ScalarPropertyFragment\n  dateWithPrecision {\n    ...VariablePrecisionDateControlFragment\n  }\n}\n\nfragment VariablePrecisionDateControlFragment on VariablePrecisionDate {\n  precision\n  value\n}\n\nfragment getEntityTitleFragment on Entity {\n  __isEntity: __typename\n  __typename\n  title\n  schemaVersion {\n    identifier\n    id\n  }\n  ... on Collection {\n    namedAncestors {\n      ancestor {\n        __typename\n        ... on Entity {\n          __isEntity: __typename\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n  ... on Item {\n    namedAncestors {\n      ancestor {\n        __typename\n        ... on Entity {\n          __isEntity: __typename\n          title\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment useChildRouteLinksFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n}\n\nfragment useSchemaContextFragment on SchemaInstanceContext {\n  assets {\n    kind\n    label\n    value\n  }\n  contributors {\n    kind\n    label\n    value\n  }\n  defaultValues\n  entityId\n  fieldValues\n  schemaVersionSlug\n}\n\nfragment useSchemaPropertiesFragment on SchemaInstance {\n  __isSchemaInstance: __typename\n  properties: schemaProperties {\n    __typename\n    ... on SchemaProperty {\n      __isSchemaProperty: __typename\n      fullPath\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '6b3473b656ebf665259ef3e6d22e5e4d';
export default node;
