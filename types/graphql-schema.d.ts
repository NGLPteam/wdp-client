import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded date */
  ISO8601Date: string;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: string;
  /** Represents untyped JSON */
  JSON: any;
  /** A slug that can identify a record in context */
  Slug: string;
};

/** An access control list */
export type AccessControlList = {
  __typename?: 'AccessControlList';
  permissions: Array<PermissionGrant>;
};

export type AnyAsset = AssetAudio | AssetDocument | AssetImage | AssetPdf | AssetUnknown | AssetVideo | { __typename?: "%other" };

/** Something that can be attached to */
export type AnyAttachable = Collection | Community | Item | { __typename?: "%other" };

export type AnyContributor = OrganizationContributor | PersonContributor | { __typename?: "%other" };

/** The connection type for AnyContributor. */
export type AnyContributorConnection = Paginated & {
  __typename?: 'AnyContributorConnection';
  /** A list of edges. */
  edges: Array<AnyContributorEdge>;
  /** A list of nodes. */
  nodes: Array<AnyContributor>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AnyContributorEdge = {
  __typename?: 'AnyContributorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AnyContributor;
};

/** A hierarchical entity type */
export type AnyEntity = Collection | Community | Item | { __typename?: "%other" };

/** A generic asset type, implemented by all the more specific kinds */
export type Asset = {
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  kind: AssetKind;
  name: Scalars['String'];
  preview?: Maybe<AssetPreview>;
};

export type AssetAudio = Asset & Node & Sluggable & {
  __typename?: 'AssetAudio';
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview?: Maybe<AssetPreview>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type AssetDocument = Asset & Node & Sluggable & {
  __typename?: 'AssetDocument';
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview?: Maybe<AssetPreview>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type AssetImage = Asset & Node & Sluggable & {
  __typename?: 'AssetImage';
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview?: Maybe<AssetPreview>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The supported kinds of assets in the system */
export type AssetKind =
  | 'image'
  | 'video'
  | 'audio'
  | 'pdf'
  | 'document'
  | 'unknown'
  | '%future added value';

export type AssetPdf = Asset & Node & Sluggable & {
  __typename?: 'AssetPDF';
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview?: Maybe<AssetPreview>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type AssetPreview = {
  __typename?: 'AssetPreview';
  alt: Scalars['String'];
  large: PreviewImageMap;
  medium: PreviewImageMap;
  small: PreviewImageMap;
  thumb: PreviewImageMap;
};

export type AssetUnknown = Asset & Node & Sluggable & {
  __typename?: 'AssetUnknown';
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview?: Maybe<AssetPreview>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type AssetVideo = Asset & Node & Sluggable & {
  __typename?: 'AssetVideo';
  attachable: AnyAttachable;
  caption?: Maybe<Scalars['String']>;
  contentType: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  downloadUrl?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  id: Scalars['ID'];
  kind: AssetKind;
  name: Scalars['String'];
  preview?: Maybe<AssetPreview>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** A collection of items */
export type Collection = Entity & HierarchicalEntry & Contributable & Node & Sluggable & {
  __typename?: 'Collection';
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles?: Maybe<Array<Role>>;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  /** @deprecated Use Collection.collections */
  children: CollectionConnection;
  collections: CollectionConnection;
  community: Community;
  contributions: CollectionContributionConnection;
  /** Contributors to this element */
  contributors: AnyContributorConnection;
  createdAt: Scalars['ISO8601DateTime'];
  doi?: Maybe<Scalars['String']>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int'];
  id: Scalars['ID'];
  identifier: Scalars['String'];
  itemLinks: CollectionLinkedItemConnection;
  items: ItemConnection;
  leaf: Scalars['Boolean'];
  links: CollectionLinkConnection;
  parent?: Maybe<CollectionParent>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  properties?: Maybe<Scalars['JSON']>;
  publishedOn?: Maybe<Scalars['ISO8601Date']>;
  root: Scalars['Boolean'];
  slug: Scalars['Slug'];
  summary?: Maybe<Scalars['String']>;
  /** A mapping of an entity's preview thumbnail */
  thumbnail?: Maybe<AssetPreview>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']>;
};


/** A collection of items */
export type CollectionChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A collection of items */
export type CollectionCollectionsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};


/** A collection of items */
export type CollectionContributionsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};


/** A collection of items */
export type CollectionContributorsArgs = {
  order?: Maybe<SimpleOrder>;
  kind?: Maybe<ContributorFilterKind>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};


/** A collection of items */
export type CollectionItemLinksArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};


/** A collection of items */
export type CollectionItemsArgs = {
  order?: Maybe<SimpleOrder>;
  nodeFilter?: Maybe<TreeNodeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};


/** A collection of items */
export type CollectionLinksArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};

/** The connection type for Collection. */
export type CollectionConnection = Paginated & {
  __typename?: 'CollectionConnection';
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  /** A list of nodes. */
  nodes: Array<Collection>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A contribution to a collection */
export type CollectionContribution = Contribution & Node & Sluggable & {
  __typename?: 'CollectionContribution';
  collection: Collection;
  contributor: AnyContributor;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for CollectionContribution. */
export type CollectionContributionConnection = Paginated & {
  __typename?: 'CollectionContributionConnection';
  /** A list of edges. */
  edges: Array<CollectionContributionEdge>;
  /** A list of nodes. */
  nodes: Array<CollectionContribution>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CollectionContributionEdge = {
  __typename?: 'CollectionContributionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CollectionContribution;
};

/** An edge in a connection. */
export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Collection;
};

export type CollectionLink = Node & Sluggable & {
  __typename?: 'CollectionLink';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  operator: CollectionLinkOperator;
  slug: Scalars['Slug'];
  source: Collection;
  target: Collection;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for CollectionLink. */
export type CollectionLinkConnection = Paginated & {
  __typename?: 'CollectionLinkConnection';
  /** A list of edges. */
  edges: Array<CollectionLinkEdge>;
  /** A list of nodes. */
  nodes: Array<CollectionLink>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CollectionLinkEdge = {
  __typename?: 'CollectionLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CollectionLink;
};

export type CollectionLinkOperator =
  | 'contains'
  | 'references'
  | '%future added value';

export type CollectionLinkedItem = Node & Sluggable & {
  __typename?: 'CollectionLinkedItem';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  operator: CollectionLinkedItemOperator;
  slug: Scalars['Slug'];
  source: Collection;
  target: Item;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for CollectionLinkedItem. */
export type CollectionLinkedItemConnection = Paginated & {
  __typename?: 'CollectionLinkedItemConnection';
  /** A list of edges. */
  edges: Array<CollectionLinkedItemEdge>;
  /** A list of nodes. */
  nodes: Array<CollectionLinkedItem>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CollectionLinkedItemEdge = {
  __typename?: 'CollectionLinkedItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CollectionLinkedItem;
};

export type CollectionLinkedItemOperator =
  | 'contains'
  | 'references'
  | '%future added value';

export type CollectionParent = Collection | Community | { __typename?: "%other" };

/** A community of users */
export type Community = Entity & Node & Sluggable & {
  __typename?: 'Community';
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles?: Maybe<Array<Role>>;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  collections: CollectionConnection;
  createdAt: Scalars['ISO8601DateTime'];
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int'];
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  /** @deprecated Use Community.title */
  name: Scalars['String'];
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  position?: Maybe<Scalars['Int']>;
  slug: Scalars['Slug'];
  /** A mapping of an entity's preview thumbnail */
  thumbnail?: Maybe<AssetPreview>;
  title: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};


/** A community of users */
export type CommunityCollectionsArgs = {
  order?: Maybe<SimpleOrder>;
  nodeFilter?: Maybe<TreeNodeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};

/** The connection type for Community. */
export type CommunityConnection = Paginated & {
  __typename?: 'CommunityConnection';
  /** A list of edges. */
  edges: Array<CommunityEdge>;
  /** A list of nodes. */
  nodes: Array<Community>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CommunityEdge = {
  __typename?: 'CommunityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Community;
};

/** Something that can be contributed to */
export type Contributable = {
  /** Contributors to this element */
  contributors: AnyContributorConnection;
};


/** Something that can be contributed to */
export type ContributableContributorsArgs = {
  order?: Maybe<SimpleOrder>;
  kind?: Maybe<ContributorFilterKind>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};

/** A contribution from a contributor */
export type Contribution = {
  contributor: AnyContributor;
};

/** A contributor who has made a contribution */
export type Contributor = {
  bio?: Maybe<Scalars['String']>;
  collectionContributions: CollectionContributionConnection;
  email?: Maybe<Scalars['String']>;
  identifier: Scalars['String'];
  itemContributions: ItemContributionConnection;
  kind: ContributorKind;
  links: Array<Maybe<ContributorLink>>;
  prefix?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


/** A contributor who has made a contribution */
export type ContributorCollectionContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A contributor who has made a contribution */
export type ContributorItemContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ContributorFilterKind =
  | 'ALL'
  | 'ORGANIZATION'
  | 'PERSON'
  | '%future added value';

export type ContributorKind =
  | 'organization'
  | 'person'
  | '%future added value';

/** A link for a contributor */
export type ContributorLink = {
  __typename?: 'ContributorLink';
  title: Scalars['String'];
  url: Scalars['String'];
};

/** Autogenerated input type of CreateAsset */
export type CreateAssetInput = {
  /** The entity that owns the attachment */
  entityId: Scalars['ID'];
  /** This is the path returned from uploading a file via tus. It should look vaguely like `/files/<base64>` */
  attachmentUrl: Scalars['String'];
  /** A human readable name for the asset */
  name: Scalars['String'];
  /** The position the asset occupies amongst siblings */
  position?: Maybe<Scalars['Int']>;
  /** Alt text to display for the asset (if applicable) */
  altText?: Maybe<Scalars['String']>;
  /** A caption to display below the asset (if applicable) */
  caption?: Maybe<Scalars['String']>;
  /** The original filename, since Tus mangles them. */
  filename?: Maybe<Scalars['String']>;
  /**
   * The original content type. WDP will detect a real content type, so this can't be spoofed, but it can be helpful with generating
   * an initial asset with the correct kind.
   */
  mimeType?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateAsset */
export type CreateAssetPayload = {
  __typename?: 'CreateAssetPayload';
  asset?: Maybe<AnyAsset>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of CreateCollection */
export type CreateCollectionInput = {
  /** The parent of the new collection. This can be the encoded ID of a community or another collection. */
  parentId: Scalars['ID'];
  title: Scalars['String'];
  identifier: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateCollection */
export type CreateCollectionPayload = {
  __typename?: 'CreateCollectionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  collection?: Maybe<Collection>;
  errors: Array<UserError>;
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of CreateCommunity */
export type CreateCommunityInput = {
  /** A human readable title for the community */
  title: Scalars['String'];
  /** The position the community occupies in the list */
  position?: Maybe<Scalars['Int']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateCommunity */
export type CreateCommunityPayload = {
  __typename?: 'CreateCommunityPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A representation of a successfully created community */
  community?: Maybe<Community>;
  errors: Array<UserError>;
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of CreateItem */
export type CreateItemInput = {
  /** The parent of the item. This can be the encoded ID of a collection or another item. */
  parentId: Scalars['ID'];
  title: Scalars['String'];
  identifier: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateItem */
export type CreateItemPayload = {
  __typename?: 'CreateItemPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  haltCode?: Maybe<Scalars['String']>;
  /** A representation of a successfully created item */
  item?: Maybe<Item>;
};

/** Autogenerated input type of CreateRole */
export type CreateRoleInput = {
  name: Scalars['String'];
  accessControlList: Scalars['JSON'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateRole */
export type CreateRolePayload = {
  __typename?: 'CreateRolePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  haltCode?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

/** An entity that exists in the hierarchy. */
export type Entity = {
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles?: Maybe<Array<Role>>;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int'];
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  /** A mapping of an entity's preview thumbnail */
  thumbnail?: Maybe<AssetPreview>;
};

export type EntityBreadcrumb = Node & {
  __typename?: 'EntityBreadcrumb';
  crumb: AnyEntity;
  depth: Scalars['Int'];
  id: Scalars['ID'];
  kind: EntityKind;
  label: Scalars['String'];
  slug: Scalars['String'];
};

/** An enumeration of the different kinds of hierarchical entities */
export type EntityKind =
  | 'COMMUNITY'
  | 'COLLECTION'
  | 'ITEM'
  | '%future added value';

export type EntityPermissionFilter =
  | 'READ_ONLY'
  | 'CRUD'
  | '%future added value';

export type ExposesPermissions = {
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
};

/** Autogenerated input type of GrantAccess */
export type GrantAccessInput = {
  entityId: Scalars['ID'];
  roleId: Scalars['ID'];
  userId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of GrantAccess */
export type GrantAccessPayload = {
  __typename?: 'GrantAccessPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  entity?: Maybe<AnyEntity>;
  errors: Array<UserError>;
  /** Whether or not access was granted */
  granted?: Maybe<Scalars['Boolean']>;
  haltCode?: Maybe<Scalars['String']>;
};

/** A hierarchical entry, like a collection or an item. */
export type HierarchicalEntry = {
  createdAt: Scalars['ISO8601DateTime'];
  doi?: Maybe<Scalars['String']>;
  identifier: Scalars['String'];
  leaf: Scalars['Boolean'];
  properties?: Maybe<Scalars['JSON']>;
  publishedOn?: Maybe<Scalars['ISO8601Date']>;
  root: Scalars['Boolean'];
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']>;
};



/** An item that belongs to a collection */
export type Item = Entity & HierarchicalEntry & Contributable & Node & Sluggable & {
  __typename?: 'Item';
  /** Derived access control list */
  accessControlList?: Maybe<AccessControlList>;
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  /** The role(s) that gave the permissions to access this resource, if any. */
  applicableRoles?: Maybe<Array<Role>>;
  /** Previous entries in the hierarchy */
  breadcrumbs: Array<EntityBreadcrumb>;
  /** @deprecated Use Item.items */
  children: ItemConnection;
  collection: Collection;
  community: Community;
  contributions: ItemContributionConnection;
  /** Contributors to this element */
  contributors: AnyContributorConnection;
  createdAt: Scalars['ISO8601DateTime'];
  doi?: Maybe<Scalars['String']>;
  /** The depth of the hierarchical entity, taking into account any parent types */
  hierarchicalDepth: Scalars['Int'];
  id: Scalars['ID'];
  identifier: Scalars['String'];
  items: ItemConnection;
  leaf: Scalars['Boolean'];
  links: ItemLinkConnection;
  parent?: Maybe<ItemParent>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  properties?: Maybe<Scalars['JSON']>;
  publishedOn?: Maybe<Scalars['ISO8601Date']>;
  root: Scalars['Boolean'];
  slug: Scalars['Slug'];
  summary?: Maybe<Scalars['String']>;
  /** A mapping of an entity's preview thumbnail */
  thumbnail?: Maybe<AssetPreview>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  visibleAfterAt?: Maybe<Scalars['ISO8601DateTime']>;
};


/** An item that belongs to a collection */
export type ItemChildrenArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An item that belongs to a collection */
export type ItemContributionsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};


/** An item that belongs to a collection */
export type ItemContributorsArgs = {
  order?: Maybe<SimpleOrder>;
  kind?: Maybe<ContributorFilterKind>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};


/** An item that belongs to a collection */
export type ItemItemsArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};


/** An item that belongs to a collection */
export type ItemLinksArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};

/** The connection type for Item. */
export type ItemConnection = Paginated & {
  __typename?: 'ItemConnection';
  /** A list of edges. */
  edges: Array<ItemEdge>;
  /** A list of nodes. */
  nodes: Array<Item>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A contribution to an item */
export type ItemContribution = Contribution & Node & Sluggable & {
  __typename?: 'ItemContribution';
  contributor: AnyContributor;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  item: Item;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for ItemContribution. */
export type ItemContributionConnection = Paginated & {
  __typename?: 'ItemContributionConnection';
  /** A list of edges. */
  edges: Array<ItemContributionEdge>;
  /** A list of nodes. */
  nodes: Array<ItemContribution>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ItemContributionEdge = {
  __typename?: 'ItemContributionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ItemContribution;
};

/** An edge in a connection. */
export type ItemEdge = {
  __typename?: 'ItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Item;
};

export type ItemLink = Node & Sluggable & {
  __typename?: 'ItemLink';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  operator: ItemLinkOperator;
  slug: Scalars['Slug'];
  source: Item;
  target: Item;
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for ItemLink. */
export type ItemLinkConnection = Paginated & {
  __typename?: 'ItemLinkConnection';
  /** A list of edges. */
  edges: Array<ItemLinkEdge>;
  /** A list of nodes. */
  nodes: Array<ItemLink>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ItemLinkEdge = {
  __typename?: 'ItemLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ItemLink;
};

export type ItemLinkOperator =
  | 'contains'
  | 'references'
  | '%future added value';

export type ItemParent = Collection | Item | { __typename?: "%other" };


/** The entry point for making changes to the data within the WDP API. */
export type Mutation = {
  __typename?: 'Mutation';
  createAsset?: Maybe<CreateAssetPayload>;
  createCollection?: Maybe<CreateCollectionPayload>;
  /** Create a community */
  createCommunity?: Maybe<CreateCommunityPayload>;
  /** Create an item */
  createItem?: Maybe<CreateItemPayload>;
  /**
   * Create a global role, with a set of permissions, that can be used to grant access to various parts of the hierarchy
   * in a granular fashion.
   */
  createRole?: Maybe<CreateRolePayload>;
  /** Grant access to a specific hierarchical entity */
  grantAccess?: Maybe<GrantAccessPayload>;
  /**
   * Reassign the collection to another point in the hierarchy.
   *
   * This will update all child collections and descended items, if need be.
   */
  reparentCollection?: Maybe<ReparentCollectionPayload>;
  /**
   * Reassign the item to another point in the hierarchy.
   *
   * This will also update any descendant items, if need be.
   */
  reparentItem?: Maybe<ReparentItemPayload>;
  /** Revoke access from a specific hierarchical entity */
  revokeAccess?: Maybe<RevokeAccessPayload>;
  /** Update a collection */
  updateCollection?: Maybe<UpdateCollectionPayload>;
  /** Update a community */
  updateCommunity?: Maybe<UpdateCommunityPayload>;
  /** Update an item */
  updateItem?: Maybe<UpdateItemPayload>;
  /** Update the name or permissions for a given role. */
  updateRole?: Maybe<UpdateRolePayload>;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateAssetArgs = {
  input: CreateAssetInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateCommunityArgs = {
  input: CreateCommunityInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationGrantAccessArgs = {
  input: GrantAccessInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationReparentCollectionArgs = {
  input: ReparentCollectionInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationReparentItemArgs = {
  input: ReparentItemInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationRevokeAccessArgs = {
  input: RevokeAccessInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateCommunityArgs = {
  input: UpdateCommunityInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


/** The entry point for making changes to the data within the WDP API. */
export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

/** An organization that has made contributions */
export type OrganizationContributor = Contributor & Node & Sluggable & {
  __typename?: 'OrganizationContributor';
  bio?: Maybe<Scalars['String']>;
  collectionContributions: CollectionContributionConnection;
  createdAt: Scalars['ISO8601DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  itemContributions: ItemContributionConnection;
  kind: ContributorKind;
  legalName?: Maybe<Scalars['String']>;
  links: Array<Maybe<ContributorLink>>;
  location?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  suffix?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  url?: Maybe<Scalars['String']>;
};


/** An organization that has made contributions */
export type OrganizationContributorCollectionContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An organization that has made contributions */
export type OrganizationContributorItemContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Determines the direction that page-number based pagination should flow */
export type PageDirection =
  | 'FORWARDS'
  | 'BACKWARDS'
  | '%future added value';

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** The page (if page-based pagination is supported and one was provided, does not introspect a value with cursor-based pagination) */
  page?: Maybe<Scalars['Int']>;
  /** The total number of pages available to the connection (if page-based pagination supported and a page was provided) */
  pageCount?: Maybe<Scalars['Int']>;
  /** The number of edges/nodes per page (if page-based pagination supported and a page was provided) */
  perPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** The total number of nodes available to this connection, constrained by applied filters (if any) */
  totalCount: Scalars['Int'];
  /** The total number of nodes available to this connection, independent of any filters */
  totalUnfilteredCount: Scalars['Int'];
};

/** Connections can be paginated by cursor or number. */
export type Paginated = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** A grant of a specific permission within a specific scope */
export type PermissionGrant = {
  __typename?: 'PermissionGrant';
  allowed: Scalars['Boolean'];
  name: Scalars['String'];
  scope?: Maybe<Scalars['String']>;
};

/** A person that has made contributions */
export type PersonContributor = Contributor & Node & Sluggable & {
  __typename?: 'PersonContributor';
  affiliation?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  collectionContributions: CollectionContributionConnection;
  createdAt: Scalars['ISO8601DateTime'];
  email?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  itemContributions: ItemContributionConnection;
  kind: ContributorKind;
  links: Array<Maybe<ContributorLink>>;
  prefix?: Maybe<Scalars['String']>;
  slug: Scalars['Slug'];
  suffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  url?: Maybe<Scalars['String']>;
};


/** A person that has made contributions */
export type PersonContributorCollectionContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** A person that has made contributions */
export type PersonContributorItemContributionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PreviewImage = {
  __typename?: 'PreviewImage';
  alt: Scalars['String'];
  dimensions: Array<Scalars['Int']>;
  height: Scalars['Int'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type PreviewImageMap = {
  __typename?: 'PreviewImageMap';
  alt: Scalars['String'];
  dimensions: Array<Scalars['Int']>;
  height: Scalars['Int'];
  png?: Maybe<PreviewImage>;
  webp?: Maybe<PreviewImage>;
  width: Scalars['Int'];
};

/** The entry point for retrieving data from within the WDP API. */
export type Query = {
  __typename?: 'Query';
  /** Look up a collection by slug */
  collection?: Maybe<Collection>;
  /** List all communities */
  communities: CommunityConnection;
  /** Look up a community by slug */
  community?: Maybe<Community>;
  /** Look up a contributor by slug */
  contributor?: Maybe<AnyContributor>;
  /** A list of all contributors in the system */
  contributors: AnyContributorConnection;
  /** Look up an item by slug */
  item?: Maybe<Item>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Fetches a list of objects given a list of IDs. */
  nodes: Array<Maybe<Node>>;
  /** List all roles */
  roles: RoleConnection;
  /** A list of all users in the system */
  users: UserConnection;
  /** The currently authenticated user. AKA: you */
  viewer?: Maybe<User>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryCollectionArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryCommunitiesArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryCommunityArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryContributorArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryContributorsArgs = {
  order?: Maybe<SimpleOrder>;
  kind?: Maybe<ContributorFilterKind>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryItemArgs = {
  slug: Scalars['Slug'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryNodeArgs = {
  id: Scalars['ID'];
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryRolesArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** The entry point for retrieving data from within the WDP API. */
export type QueryUsersArgs = {
  order?: Maybe<SimpleOrder>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};

/** Autogenerated input type of ReparentCollection */
export type ReparentCollectionInput = {
  /** The collection in need of a new parent */
  collectionId: Scalars['ID'];
  /** The id for the collection's new parent. This can be a community or another collection. */
  parentId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ReparentCollection */
export type ReparentCollectionPayload = {
  __typename?: 'ReparentCollectionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  collection?: Maybe<Collection>;
  errors: Array<UserError>;
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of ReparentItem */
export type ReparentItemInput = {
  /** The collection in need of a new parent */
  itemId: Scalars['ID'];
  /** The id for the item's new parent. This can be a collection or another item. */
  parentId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ReparentItem */
export type ReparentItemPayload = {
  __typename?: 'ReparentItemPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  haltCode?: Maybe<Scalars['String']>;
  item?: Maybe<Item>;
};

/** Autogenerated input type of RevokeAccess */
export type RevokeAccessInput = {
  entityId: Scalars['ID'];
  roleId: Scalars['ID'];
  userId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RevokeAccess */
export type RevokeAccessPayload = {
  __typename?: 'RevokeAccessPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  entity?: Maybe<AnyEntity>;
  errors: Array<UserError>;
  haltCode?: Maybe<Scalars['String']>;
  /** Whether or not access was revoked */
  revoked?: Maybe<Scalars['Boolean']>;
};

/** A named role in the WDP API */
export type Role = Node & Sluggable & {
  __typename?: 'Role';
  /** The access control list for this specific role */
  accessControlList: AccessControlList;
  /** A list of action names that have been granted to this role */
  allowedActions: Array<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  /** The human readable name of the role within the system */
  name: Scalars['String'];
  /**
   * Surfaced from the accessControlList for convenience, these are returned as
   * an array that allows a user to check for the state of all possible roles
   * without having to specify them explicitly in the GraphQL request
   */
  permissions: Array<PermissionGrant>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
};

/** The connection type for Role. */
export type RoleConnection = Paginated & {
  __typename?: 'RoleConnection';
  /** A list of edges. */
  edges: Array<RoleEdge>;
  /** A list of nodes. */
  nodes: Array<Role>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RoleEdge = {
  __typename?: 'RoleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Role;
};

export type SimpleOrder =
  | 'RECENT'
  | 'OLDEST'
  | '%future added value';


/** Objects have a serialized slug for looking them up in the system and generating links without UUIDs */
export type Sluggable = {
  slug: Scalars['Slug'];
};

/** When retrieving a paginated connection of tree-like entities, this enum is used to delineate which class of nodes to retrieve. Usually, you only want roots, but two other possibilities are exposed. */
export type TreeNodeFilter =
  /** Fetch only nodes that are "roots": nodes that do not have a parent of the same type */
  | 'ROOTS_ONLY'
  /** Fetch all nodes that match other filters passed to the resolver */
  | 'ROOTS_AND_LEAVES'
  /** Fetch only nodes that are "leaves"; nodes that have a parent of the same type */
  | 'LEAVES_ONLY'
  | '%future added value';

/** Autogenerated input type of UpdateCollection */
export type UpdateCollectionInput = {
  collectionId: Scalars['ID'];
  /** Human readable title for the collection */
  title: Scalars['String'];
  /** Machine readable title for the collection, should be unique within its scope */
  identifier: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateCollection */
export type UpdateCollectionPayload = {
  __typename?: 'UpdateCollectionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A new representation of the collection, on a successful update */
  collection?: Maybe<Collection>;
  errors: Array<UserError>;
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateCommunity */
export type UpdateCommunityInput = {
  communityId: Scalars['ID'];
  /** A human readable title for the community */
  title: Scalars['String'];
  /** The position the community occupies in the list */
  position?: Maybe<Scalars['Int']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateCommunity */
export type UpdateCommunityPayload = {
  __typename?: 'UpdateCommunityPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A new representation of the community, on a succesful update */
  community?: Maybe<Community>;
  errors: Array<UserError>;
  haltCode?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateItem */
export type UpdateItemInput = {
  /** The item to update */
  itemId: Scalars['ID'];
  title: Scalars['String'];
  identifier: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateItem */
export type UpdateItemPayload = {
  __typename?: 'UpdateItemPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  haltCode?: Maybe<Scalars['String']>;
  /** A new representation of the item, on a succesful update */
  item?: Maybe<Item>;
};

/** Autogenerated input type of UpdateRole */
export type UpdateRoleInput = {
  roleId: Scalars['ID'];
  name: Scalars['String'];
  accessControlList: Scalars['JSON'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateRole */
export type UpdateRolePayload = {
  __typename?: 'UpdateRolePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors: Array<UserError>;
  haltCode?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
};

/** A user */
export type User = ExposesPermissions & Node & Sluggable & {
  __typename?: 'User';
  /** A list of allowed actions for the given user on this entity (and its descendants). */
  allowedActions: Array<Scalars['String']>;
  collections: CollectionConnection;
  communities: CommunityConnection;
  createdAt: Scalars['ISO8601DateTime'];
  email?: Maybe<Scalars['String']>;
  emailVerified: Scalars['Boolean'];
  globalAdmin: Scalars['Boolean'];
  id: Scalars['ID'];
  items: ItemConnection;
  name?: Maybe<Scalars['String']>;
  /** An array of hashes that can be requested to load in a context */
  permissions: Array<PermissionGrant>;
  slug: Scalars['Slug'];
  updatedAt: Scalars['ISO8601DateTime'];
  username?: Maybe<Scalars['String']>;
};


/** A user */
export type UserCollectionsArgs = {
  access?: Maybe<EntityPermissionFilter>;
  order?: Maybe<SimpleOrder>;
  nodeFilter?: Maybe<TreeNodeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};


/** A user */
export type UserCommunitiesArgs = {
  access?: Maybe<EntityPermissionFilter>;
  order?: Maybe<SimpleOrder>;
  nodeFilter?: Maybe<TreeNodeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};


/** A user */
export type UserItemsArgs = {
  access?: Maybe<EntityPermissionFilter>;
  order?: Maybe<SimpleOrder>;
  nodeFilter?: Maybe<TreeNodeFilter>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pageDirection?: PageDirection;
  perPage?: Scalars['Int'];
};

/** The connection type for User. */
export type UserConnection = Paginated & {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** A list of nodes. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** A user-readable error */
export type UserError = {
  __typename?: 'UserError';
  code?: Maybe<Scalars['String']>;
  /** A description of the error */
  message: Scalars['String'];
  /** Which input value this error came from */
  path?: Maybe<Array<Scalars['String']>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessControlList: ResolverTypeWrapper<AccessControlList>;
  AnyAsset: ResolversTypes['AssetAudio'] | ResolversTypes['AssetDocument'] | ResolversTypes['AssetImage'] | ResolversTypes['AssetPDF'] | ResolversTypes['AssetUnknown'] | ResolversTypes['AssetVideo'];
  AnyAttachable: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Item'];
  AnyContributor: ResolversTypes['OrganizationContributor'] | ResolversTypes['PersonContributor'];
  AnyContributorConnection: ResolverTypeWrapper<Omit<AnyContributorConnection, 'nodes'> & { nodes: Array<ResolversTypes['AnyContributor']> }>;
  AnyContributorEdge: ResolverTypeWrapper<Omit<AnyContributorEdge, 'node'> & { node: ResolversTypes['AnyContributor'] }>;
  String: ResolverTypeWrapper<Scalars['String']>;
  AnyEntity: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Item'];
  Asset: ResolversTypes['AssetAudio'] | ResolversTypes['AssetDocument'] | ResolversTypes['AssetImage'] | ResolversTypes['AssetPDF'] | ResolversTypes['AssetUnknown'] | ResolversTypes['AssetVideo'];
  Int: ResolverTypeWrapper<Scalars['Int']>;
  AssetAudio: ResolverTypeWrapper<Omit<AssetAudio, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  AssetDocument: ResolverTypeWrapper<Omit<AssetDocument, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetImage: ResolverTypeWrapper<Omit<AssetImage, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetKind: AssetKind;
  AssetPDF: ResolverTypeWrapper<Omit<AssetPdf, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetPreview: ResolverTypeWrapper<AssetPreview>;
  AssetUnknown: ResolverTypeWrapper<Omit<AssetUnknown, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  AssetVideo: ResolverTypeWrapper<Omit<AssetVideo, 'attachable'> & { attachable: ResolversTypes['AnyAttachable'] }>;
  Collection: ResolverTypeWrapper<Omit<Collection, 'parent'> & { parent?: Maybe<ResolversTypes['CollectionParent']> }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CollectionConnection: ResolverTypeWrapper<CollectionConnection>;
  CollectionContribution: ResolverTypeWrapper<Omit<CollectionContribution, 'contributor'> & { contributor: ResolversTypes['AnyContributor'] }>;
  CollectionContributionConnection: ResolverTypeWrapper<CollectionContributionConnection>;
  CollectionContributionEdge: ResolverTypeWrapper<CollectionContributionEdge>;
  CollectionEdge: ResolverTypeWrapper<CollectionEdge>;
  CollectionLink: ResolverTypeWrapper<CollectionLink>;
  CollectionLinkConnection: ResolverTypeWrapper<CollectionLinkConnection>;
  CollectionLinkEdge: ResolverTypeWrapper<CollectionLinkEdge>;
  CollectionLinkOperator: CollectionLinkOperator;
  CollectionLinkedItem: ResolverTypeWrapper<CollectionLinkedItem>;
  CollectionLinkedItemConnection: ResolverTypeWrapper<CollectionLinkedItemConnection>;
  CollectionLinkedItemEdge: ResolverTypeWrapper<CollectionLinkedItemEdge>;
  CollectionLinkedItemOperator: CollectionLinkedItemOperator;
  CollectionParent: ResolversTypes['Collection'] | ResolversTypes['Community'];
  Community: ResolverTypeWrapper<Community>;
  CommunityConnection: ResolverTypeWrapper<CommunityConnection>;
  CommunityEdge: ResolverTypeWrapper<CommunityEdge>;
  Contributable: ResolversTypes['Collection'] | ResolversTypes['Item'];
  Contribution: ResolversTypes['CollectionContribution'] | ResolversTypes['ItemContribution'];
  Contributor: ResolversTypes['OrganizationContributor'] | ResolversTypes['PersonContributor'];
  ContributorFilterKind: ContributorFilterKind;
  ContributorKind: ContributorKind;
  ContributorLink: ResolverTypeWrapper<ContributorLink>;
  CreateAssetInput: CreateAssetInput;
  CreateAssetPayload: ResolverTypeWrapper<Omit<CreateAssetPayload, 'asset'> & { asset?: Maybe<ResolversTypes['AnyAsset']> }>;
  CreateCollectionInput: CreateCollectionInput;
  CreateCollectionPayload: ResolverTypeWrapper<CreateCollectionPayload>;
  CreateCommunityInput: CreateCommunityInput;
  CreateCommunityPayload: ResolverTypeWrapper<CreateCommunityPayload>;
  CreateItemInput: CreateItemInput;
  CreateItemPayload: ResolverTypeWrapper<CreateItemPayload>;
  CreateRoleInput: CreateRoleInput;
  CreateRolePayload: ResolverTypeWrapper<CreateRolePayload>;
  Entity: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Item'];
  EntityBreadcrumb: ResolverTypeWrapper<Omit<EntityBreadcrumb, 'crumb'> & { crumb: ResolversTypes['AnyEntity'] }>;
  EntityKind: EntityKind;
  EntityPermissionFilter: EntityPermissionFilter;
  ExposesPermissions: ResolversTypes['User'];
  GrantAccessInput: GrantAccessInput;
  GrantAccessPayload: ResolverTypeWrapper<Omit<GrantAccessPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  HierarchicalEntry: ResolversTypes['Collection'] | ResolversTypes['Item'];
  ISO8601Date: ResolverTypeWrapper<Scalars['ISO8601Date']>;
  ISO8601DateTime: ResolverTypeWrapper<Scalars['ISO8601DateTime']>;
  Item: ResolverTypeWrapper<Omit<Item, 'parent'> & { parent?: Maybe<ResolversTypes['ItemParent']> }>;
  ItemConnection: ResolverTypeWrapper<ItemConnection>;
  ItemContribution: ResolverTypeWrapper<Omit<ItemContribution, 'contributor'> & { contributor: ResolversTypes['AnyContributor'] }>;
  ItemContributionConnection: ResolverTypeWrapper<ItemContributionConnection>;
  ItemContributionEdge: ResolverTypeWrapper<ItemContributionEdge>;
  ItemEdge: ResolverTypeWrapper<ItemEdge>;
  ItemLink: ResolverTypeWrapper<ItemLink>;
  ItemLinkConnection: ResolverTypeWrapper<ItemLinkConnection>;
  ItemLinkEdge: ResolverTypeWrapper<ItemLinkEdge>;
  ItemLinkOperator: ItemLinkOperator;
  ItemParent: ResolversTypes['Collection'] | ResolversTypes['Item'];
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['AssetAudio'] | ResolversTypes['AssetDocument'] | ResolversTypes['AssetImage'] | ResolversTypes['AssetPDF'] | ResolversTypes['AssetUnknown'] | ResolversTypes['AssetVideo'] | ResolversTypes['Collection'] | ResolversTypes['CollectionContribution'] | ResolversTypes['CollectionLink'] | ResolversTypes['CollectionLinkedItem'] | ResolversTypes['Community'] | ResolversTypes['EntityBreadcrumb'] | ResolversTypes['Item'] | ResolversTypes['ItemContribution'] | ResolversTypes['ItemLink'] | ResolversTypes['OrganizationContributor'] | ResolversTypes['PersonContributor'] | ResolversTypes['Role'] | ResolversTypes['User'];
  OrganizationContributor: ResolverTypeWrapper<OrganizationContributor>;
  PageDirection: PageDirection;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Paginated: ResolversTypes['AnyContributorConnection'] | ResolversTypes['CollectionConnection'] | ResolversTypes['CollectionContributionConnection'] | ResolversTypes['CollectionLinkConnection'] | ResolversTypes['CollectionLinkedItemConnection'] | ResolversTypes['CommunityConnection'] | ResolversTypes['ItemConnection'] | ResolversTypes['ItemContributionConnection'] | ResolversTypes['ItemLinkConnection'] | ResolversTypes['RoleConnection'] | ResolversTypes['UserConnection'];
  PermissionGrant: ResolverTypeWrapper<PermissionGrant>;
  PersonContributor: ResolverTypeWrapper<PersonContributor>;
  PreviewImage: ResolverTypeWrapper<PreviewImage>;
  PreviewImageMap: ResolverTypeWrapper<PreviewImageMap>;
  Query: ResolverTypeWrapper<{}>;
  ReparentCollectionInput: ReparentCollectionInput;
  ReparentCollectionPayload: ResolverTypeWrapper<ReparentCollectionPayload>;
  ReparentItemInput: ReparentItemInput;
  ReparentItemPayload: ResolverTypeWrapper<ReparentItemPayload>;
  RevokeAccessInput: RevokeAccessInput;
  RevokeAccessPayload: ResolverTypeWrapper<Omit<RevokeAccessPayload, 'entity'> & { entity?: Maybe<ResolversTypes['AnyEntity']> }>;
  Role: ResolverTypeWrapper<Role>;
  RoleConnection: ResolverTypeWrapper<RoleConnection>;
  RoleEdge: ResolverTypeWrapper<RoleEdge>;
  SimpleOrder: SimpleOrder;
  Slug: ResolverTypeWrapper<Scalars['Slug']>;
  Sluggable: ResolversTypes['AssetAudio'] | ResolversTypes['AssetDocument'] | ResolversTypes['AssetImage'] | ResolversTypes['AssetPDF'] | ResolversTypes['AssetUnknown'] | ResolversTypes['AssetVideo'] | ResolversTypes['Collection'] | ResolversTypes['CollectionContribution'] | ResolversTypes['CollectionLink'] | ResolversTypes['CollectionLinkedItem'] | ResolversTypes['Community'] | ResolversTypes['Item'] | ResolversTypes['ItemContribution'] | ResolversTypes['ItemLink'] | ResolversTypes['OrganizationContributor'] | ResolversTypes['PersonContributor'] | ResolversTypes['Role'] | ResolversTypes['User'];
  TreeNodeFilter: TreeNodeFilter;
  UpdateCollectionInput: UpdateCollectionInput;
  UpdateCollectionPayload: ResolverTypeWrapper<UpdateCollectionPayload>;
  UpdateCommunityInput: UpdateCommunityInput;
  UpdateCommunityPayload: ResolverTypeWrapper<UpdateCommunityPayload>;
  UpdateItemInput: UpdateItemInput;
  UpdateItemPayload: ResolverTypeWrapper<UpdateItemPayload>;
  UpdateRoleInput: UpdateRoleInput;
  UpdateRolePayload: ResolverTypeWrapper<UpdateRolePayload>;
  User: ResolverTypeWrapper<User>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserError: ResolverTypeWrapper<UserError>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessControlList: AccessControlList;
  AnyAsset: ResolversParentTypes['AssetAudio'] | ResolversParentTypes['AssetDocument'] | ResolversParentTypes['AssetImage'] | ResolversParentTypes['AssetPDF'] | ResolversParentTypes['AssetUnknown'] | ResolversParentTypes['AssetVideo'];
  AnyAttachable: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Item'];
  AnyContributor: ResolversParentTypes['OrganizationContributor'] | ResolversParentTypes['PersonContributor'];
  AnyContributorConnection: Omit<AnyContributorConnection, 'nodes'> & { nodes: Array<ResolversParentTypes['AnyContributor']> };
  AnyContributorEdge: Omit<AnyContributorEdge, 'node'> & { node: ResolversParentTypes['AnyContributor'] };
  String: Scalars['String'];
  AnyEntity: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Item'];
  Asset: ResolversParentTypes['AssetAudio'] | ResolversParentTypes['AssetDocument'] | ResolversParentTypes['AssetImage'] | ResolversParentTypes['AssetPDF'] | ResolversParentTypes['AssetUnknown'] | ResolversParentTypes['AssetVideo'];
  Int: Scalars['Int'];
  AssetAudio: Omit<AssetAudio, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  ID: Scalars['ID'];
  AssetDocument: Omit<AssetDocument, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetImage: Omit<AssetImage, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetPDF: Omit<AssetPdf, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetPreview: AssetPreview;
  AssetUnknown: Omit<AssetUnknown, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  AssetVideo: Omit<AssetVideo, 'attachable'> & { attachable: ResolversParentTypes['AnyAttachable'] };
  Collection: Omit<Collection, 'parent'> & { parent?: Maybe<ResolversParentTypes['CollectionParent']> };
  Boolean: Scalars['Boolean'];
  CollectionConnection: CollectionConnection;
  CollectionContribution: Omit<CollectionContribution, 'contributor'> & { contributor: ResolversParentTypes['AnyContributor'] };
  CollectionContributionConnection: CollectionContributionConnection;
  CollectionContributionEdge: CollectionContributionEdge;
  CollectionEdge: CollectionEdge;
  CollectionLink: CollectionLink;
  CollectionLinkConnection: CollectionLinkConnection;
  CollectionLinkEdge: CollectionLinkEdge;
  CollectionLinkedItem: CollectionLinkedItem;
  CollectionLinkedItemConnection: CollectionLinkedItemConnection;
  CollectionLinkedItemEdge: CollectionLinkedItemEdge;
  CollectionParent: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'];
  Community: Community;
  CommunityConnection: CommunityConnection;
  CommunityEdge: CommunityEdge;
  Contributable: ResolversParentTypes['Collection'] | ResolversParentTypes['Item'];
  Contribution: ResolversParentTypes['CollectionContribution'] | ResolversParentTypes['ItemContribution'];
  Contributor: ResolversParentTypes['OrganizationContributor'] | ResolversParentTypes['PersonContributor'];
  ContributorLink: ContributorLink;
  CreateAssetInput: CreateAssetInput;
  CreateAssetPayload: Omit<CreateAssetPayload, 'asset'> & { asset?: Maybe<ResolversParentTypes['AnyAsset']> };
  CreateCollectionInput: CreateCollectionInput;
  CreateCollectionPayload: CreateCollectionPayload;
  CreateCommunityInput: CreateCommunityInput;
  CreateCommunityPayload: CreateCommunityPayload;
  CreateItemInput: CreateItemInput;
  CreateItemPayload: CreateItemPayload;
  CreateRoleInput: CreateRoleInput;
  CreateRolePayload: CreateRolePayload;
  Entity: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Item'];
  EntityBreadcrumb: Omit<EntityBreadcrumb, 'crumb'> & { crumb: ResolversParentTypes['AnyEntity'] };
  ExposesPermissions: ResolversParentTypes['User'];
  GrantAccessInput: GrantAccessInput;
  GrantAccessPayload: Omit<GrantAccessPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  HierarchicalEntry: ResolversParentTypes['Collection'] | ResolversParentTypes['Item'];
  ISO8601Date: Scalars['ISO8601Date'];
  ISO8601DateTime: Scalars['ISO8601DateTime'];
  Item: Omit<Item, 'parent'> & { parent?: Maybe<ResolversParentTypes['ItemParent']> };
  ItemConnection: ItemConnection;
  ItemContribution: Omit<ItemContribution, 'contributor'> & { contributor: ResolversParentTypes['AnyContributor'] };
  ItemContributionConnection: ItemContributionConnection;
  ItemContributionEdge: ItemContributionEdge;
  ItemEdge: ItemEdge;
  ItemLink: ItemLink;
  ItemLinkConnection: ItemLinkConnection;
  ItemLinkEdge: ItemLinkEdge;
  ItemParent: ResolversParentTypes['Collection'] | ResolversParentTypes['Item'];
  JSON: Scalars['JSON'];
  Mutation: {};
  Node: ResolversParentTypes['AssetAudio'] | ResolversParentTypes['AssetDocument'] | ResolversParentTypes['AssetImage'] | ResolversParentTypes['AssetPDF'] | ResolversParentTypes['AssetUnknown'] | ResolversParentTypes['AssetVideo'] | ResolversParentTypes['Collection'] | ResolversParentTypes['CollectionContribution'] | ResolversParentTypes['CollectionLink'] | ResolversParentTypes['CollectionLinkedItem'] | ResolversParentTypes['Community'] | ResolversParentTypes['EntityBreadcrumb'] | ResolversParentTypes['Item'] | ResolversParentTypes['ItemContribution'] | ResolversParentTypes['ItemLink'] | ResolversParentTypes['OrganizationContributor'] | ResolversParentTypes['PersonContributor'] | ResolversParentTypes['Role'] | ResolversParentTypes['User'];
  OrganizationContributor: OrganizationContributor;
  PageInfo: PageInfo;
  Paginated: ResolversParentTypes['AnyContributorConnection'] | ResolversParentTypes['CollectionConnection'] | ResolversParentTypes['CollectionContributionConnection'] | ResolversParentTypes['CollectionLinkConnection'] | ResolversParentTypes['CollectionLinkedItemConnection'] | ResolversParentTypes['CommunityConnection'] | ResolversParentTypes['ItemConnection'] | ResolversParentTypes['ItemContributionConnection'] | ResolversParentTypes['ItemLinkConnection'] | ResolversParentTypes['RoleConnection'] | ResolversParentTypes['UserConnection'];
  PermissionGrant: PermissionGrant;
  PersonContributor: PersonContributor;
  PreviewImage: PreviewImage;
  PreviewImageMap: PreviewImageMap;
  Query: {};
  ReparentCollectionInput: ReparentCollectionInput;
  ReparentCollectionPayload: ReparentCollectionPayload;
  ReparentItemInput: ReparentItemInput;
  ReparentItemPayload: ReparentItemPayload;
  RevokeAccessInput: RevokeAccessInput;
  RevokeAccessPayload: Omit<RevokeAccessPayload, 'entity'> & { entity?: Maybe<ResolversParentTypes['AnyEntity']> };
  Role: Role;
  RoleConnection: RoleConnection;
  RoleEdge: RoleEdge;
  Slug: Scalars['Slug'];
  Sluggable: ResolversParentTypes['AssetAudio'] | ResolversParentTypes['AssetDocument'] | ResolversParentTypes['AssetImage'] | ResolversParentTypes['AssetPDF'] | ResolversParentTypes['AssetUnknown'] | ResolversParentTypes['AssetVideo'] | ResolversParentTypes['Collection'] | ResolversParentTypes['CollectionContribution'] | ResolversParentTypes['CollectionLink'] | ResolversParentTypes['CollectionLinkedItem'] | ResolversParentTypes['Community'] | ResolversParentTypes['Item'] | ResolversParentTypes['ItemContribution'] | ResolversParentTypes['ItemLink'] | ResolversParentTypes['OrganizationContributor'] | ResolversParentTypes['PersonContributor'] | ResolversParentTypes['Role'] | ResolversParentTypes['User'];
  UpdateCollectionInput: UpdateCollectionInput;
  UpdateCollectionPayload: UpdateCollectionPayload;
  UpdateCommunityInput: UpdateCommunityInput;
  UpdateCommunityPayload: UpdateCommunityPayload;
  UpdateItemInput: UpdateItemInput;
  UpdateItemPayload: UpdateItemPayload;
  UpdateRoleInput: UpdateRoleInput;
  UpdateRolePayload: UpdateRolePayload;
  User: User;
  UserConnection: UserConnection;
  UserEdge: UserEdge;
  UserError: UserError;
};

export type AccessControlListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessControlList'] = ResolversParentTypes['AccessControlList']> = {
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAsset'] = ResolversParentTypes['AnyAsset']> = {
  __resolveType: TypeResolveFn<'AssetAudio' | 'AssetDocument' | 'AssetImage' | 'AssetPDF' | 'AssetUnknown' | 'AssetVideo', ParentType, ContextType>;
};

export type AnyAttachableResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyAttachable'] = ResolversParentTypes['AnyAttachable']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
};

export type AnyContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContributor'] = ResolversParentTypes['AnyContributor']> = {
  __resolveType: TypeResolveFn<'OrganizationContributor' | 'PersonContributor', ParentType, ContextType>;
};

export type AnyContributorConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContributorConnection'] = ResolversParentTypes['AnyContributorConnection']> = {
  edges?: Resolver<Array<ResolversTypes['AnyContributorEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['AnyContributor']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyContributorEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContributorEdge'] = ResolversParentTypes['AnyContributorEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['AnyContributor'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnyEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyEntity'] = ResolversParentTypes['AnyEntity']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  __resolveType: TypeResolveFn<'AssetAudio' | 'AssetDocument' | 'AssetImage' | 'AssetPDF' | 'AssetUnknown' | 'AssetVideo', ParentType, ContextType>;
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<Maybe<ResolversTypes['AssetPreview']>, ParentType, ContextType>;
};

export type AssetAudioResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetAudio'] = ResolversParentTypes['AssetAudio']> = {
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<Maybe<ResolversTypes['AssetPreview']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetDocument'] = ResolversParentTypes['AssetDocument']> = {
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<Maybe<ResolversTypes['AssetPreview']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetImage'] = ResolversParentTypes['AssetImage']> = {
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<Maybe<ResolversTypes['AssetPreview']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetPdfResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetPDF'] = ResolversParentTypes['AssetPDF']> = {
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<Maybe<ResolversTypes['AssetPreview']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetPreviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetPreview'] = ResolversParentTypes['AssetPreview']> = {
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  large?: Resolver<ResolversTypes['PreviewImageMap'], ParentType, ContextType>;
  medium?: Resolver<ResolversTypes['PreviewImageMap'], ParentType, ContextType>;
  small?: Resolver<ResolversTypes['PreviewImageMap'], ParentType, ContextType>;
  thumb?: Resolver<ResolversTypes['PreviewImageMap'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetUnknownResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetUnknown'] = ResolversParentTypes['AssetUnknown']> = {
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<Maybe<ResolversTypes['AssetPreview']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetVideo'] = ResolversParentTypes['AssetVideo']> = {
  attachable?: Resolver<ResolversTypes['AnyAttachable'], ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  downloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['AssetKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<Maybe<ResolversTypes['AssetPreview']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  applicableRoles?: Resolver<Maybe<Array<ResolversTypes['Role']>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  children?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<CollectionChildrenArgs, never>>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<CollectionCollectionsArgs, 'order' | 'pageDirection' | 'perPage'>>;
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  contributions?: Resolver<ResolversTypes['CollectionContributionConnection'], ParentType, ContextType, RequireFields<CollectionContributionsArgs, 'order' | 'pageDirection' | 'perPage'>>;
  contributors?: Resolver<ResolversTypes['AnyContributorConnection'], ParentType, ContextType, RequireFields<CollectionContributorsArgs, 'order' | 'kind' | 'pageDirection' | 'perPage'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  doi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemLinks?: Resolver<ResolversTypes['CollectionLinkedItemConnection'], ParentType, ContextType, RequireFields<CollectionItemLinksArgs, 'order' | 'pageDirection' | 'perPage'>>;
  items?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<CollectionItemsArgs, 'order' | 'nodeFilter' | 'pageDirection' | 'perPage'>>;
  leaf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['CollectionLinkConnection'], ParentType, ContextType, RequireFields<CollectionLinksArgs, 'order' | 'pageDirection' | 'perPage'>>;
  parent?: Resolver<Maybe<ResolversTypes['CollectionParent']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  publishedOn?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  root?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['AssetPreview']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  visibleAfterAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionConnection'] = ResolversParentTypes['CollectionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionContribution'] = ResolversParentTypes['CollectionContribution']> = {
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  contributor?: Resolver<ResolversTypes['AnyContributor'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionContributionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionContributionConnection'] = ResolversParentTypes['CollectionContributionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionContributionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['CollectionContribution']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionContributionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionContributionEdge'] = ResolversParentTypes['CollectionContributionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CollectionContribution'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionEdge'] = ResolversParentTypes['CollectionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionLink'] = ResolversParentTypes['CollectionLink']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['CollectionLinkOperator'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionLinkConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionLinkConnection'] = ResolversParentTypes['CollectionLinkConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionLinkEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['CollectionLink']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionLinkEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionLinkEdge'] = ResolversParentTypes['CollectionLinkEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CollectionLink'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionLinkedItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionLinkedItem'] = ResolversParentTypes['CollectionLinkedItem']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['CollectionLinkedItemOperator'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionLinkedItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionLinkedItemConnection'] = ResolversParentTypes['CollectionLinkedItemConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CollectionLinkedItemEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['CollectionLinkedItem']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionLinkedItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionLinkedItemEdge'] = ResolversParentTypes['CollectionLinkedItemEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CollectionLinkedItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionParentResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionParent'] = ResolversParentTypes['CollectionParent']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community', ParentType, ContextType>;
};

export type CommunityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Community'] = ResolversParentTypes['Community']> = {
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  applicableRoles?: Resolver<Maybe<Array<ResolversTypes['Role']>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<CommunityCollectionsArgs, 'order' | 'nodeFilter' | 'pageDirection' | 'perPage'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['AssetPreview']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunityConnection'] = ResolversParentTypes['CommunityConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CommunityEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Community']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunityEdge'] = ResolversParentTypes['CommunityEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contributable'] = ResolversParentTypes['Contributable']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  contributors?: Resolver<ResolversTypes['AnyContributorConnection'], ParentType, ContextType, RequireFields<ContributableContributorsArgs, 'order' | 'kind' | 'pageDirection' | 'perPage'>>;
};

export type ContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contribution'] = ResolversParentTypes['Contribution']> = {
  __resolveType: TypeResolveFn<'CollectionContribution' | 'ItemContribution', ParentType, ContextType>;
  contributor?: Resolver<ResolversTypes['AnyContributor'], ParentType, ContextType>;
};

export type ContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contributor'] = ResolversParentTypes['Contributor']> = {
  __resolveType: TypeResolveFn<'OrganizationContributor' | 'PersonContributor', ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectionContributions?: Resolver<ResolversTypes['CollectionContributionConnection'], ParentType, ContextType, RequireFields<ContributorCollectionContributionsArgs, never>>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemContributions?: Resolver<ResolversTypes['ItemContributionConnection'], ParentType, ContextType, RequireFields<ContributorItemContributionsArgs, never>>;
  kind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  links?: Resolver<Array<Maybe<ResolversTypes['ContributorLink']>>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ContributorLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorLink'] = ResolversParentTypes['ContributorLink']> = {
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAssetPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAssetPayload'] = ResolversParentTypes['CreateAssetPayload']> = {
  asset?: Resolver<Maybe<ResolversTypes['AnyAsset']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCollectionPayload'] = ResolversParentTypes['CreateCollectionPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommunityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateCommunityPayload'] = ResolversParentTypes['CreateCommunityPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateItemPayload'] = ResolversParentTypes['CreateItemPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateRolePayload'] = ResolversParentTypes['CreateRolePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Item', ParentType, ContextType>;
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  applicableRoles?: Resolver<Maybe<Array<ResolversTypes['Role']>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['AssetPreview']>, ParentType, ContextType>;
};

export type EntityBreadcrumbResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntityBreadcrumb'] = ResolversParentTypes['EntityBreadcrumb']> = {
  crumb?: Resolver<ResolversTypes['AnyEntity'], ParentType, ContextType>;
  depth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['EntityKind'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExposesPermissionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExposesPermissions'] = ResolversParentTypes['ExposesPermissions']> = {
  __resolveType: TypeResolveFn<'User', ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
};

export type GrantAccessPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['GrantAccessPayload'] = ResolversParentTypes['GrantAccessPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  granted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HierarchicalEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['HierarchicalEntry'] = ResolversParentTypes['HierarchicalEntry']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  doi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leaf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  publishedOn?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  root?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  visibleAfterAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
};

export interface Iso8601DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Date'], any> {
  name: 'ISO8601Date';
}

export interface Iso8601DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601DateTime'], any> {
  name: 'ISO8601DateTime';
}

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  accessControlList?: Resolver<Maybe<ResolversTypes['AccessControlList']>, ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  applicableRoles?: Resolver<Maybe<Array<ResolversTypes['Role']>>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Array<ResolversTypes['EntityBreadcrumb']>, ParentType, ContextType>;
  children?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<ItemChildrenArgs, never>>;
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  contributions?: Resolver<ResolversTypes['ItemContributionConnection'], ParentType, ContextType, RequireFields<ItemContributionsArgs, 'order' | 'pageDirection' | 'perPage'>>;
  contributors?: Resolver<ResolversTypes['AnyContributorConnection'], ParentType, ContextType, RequireFields<ItemContributorsArgs, 'order' | 'kind' | 'pageDirection' | 'perPage'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  doi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hierarchicalDepth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<ItemItemsArgs, 'order' | 'pageDirection' | 'perPage'>>;
  leaf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['ItemLinkConnection'], ParentType, ContextType, RequireFields<ItemLinksArgs, 'order' | 'pageDirection' | 'perPage'>>;
  parent?: Resolver<Maybe<ResolversTypes['ItemParent']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  publishedOn?: Resolver<Maybe<ResolversTypes['ISO8601Date']>, ParentType, ContextType>;
  root?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['AssetPreview']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  visibleAfterAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemConnection'] = ResolversParentTypes['ItemConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ItemEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemContributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemContribution'] = ResolversParentTypes['ItemContribution']> = {
  contributor?: Resolver<ResolversTypes['AnyContributor'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemContributionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemContributionConnection'] = ResolversParentTypes['ItemContributionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ItemContributionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ItemContribution']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemContributionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemContributionEdge'] = ResolversParentTypes['ItemContributionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ItemContribution'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemEdge'] = ResolversParentTypes['ItemEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemLink'] = ResolversParentTypes['ItemLink']> = {
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['ItemLinkOperator'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemLinkConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemLinkConnection'] = ResolversParentTypes['ItemLinkConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ItemLinkEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ItemLink']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemLinkEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemLinkEdge'] = ResolversParentTypes['ItemLinkEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ItemLink'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemParentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemParent'] = ResolversParentTypes['ItemParent']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Item', ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAsset?: Resolver<Maybe<ResolversTypes['CreateAssetPayload']>, ParentType, ContextType, RequireFields<MutationCreateAssetArgs, 'input'>>;
  createCollection?: Resolver<Maybe<ResolversTypes['CreateCollectionPayload']>, ParentType, ContextType, RequireFields<MutationCreateCollectionArgs, 'input'>>;
  createCommunity?: Resolver<Maybe<ResolversTypes['CreateCommunityPayload']>, ParentType, ContextType, RequireFields<MutationCreateCommunityArgs, 'input'>>;
  createItem?: Resolver<Maybe<ResolversTypes['CreateItemPayload']>, ParentType, ContextType, RequireFields<MutationCreateItemArgs, 'input'>>;
  createRole?: Resolver<Maybe<ResolversTypes['CreateRolePayload']>, ParentType, ContextType, RequireFields<MutationCreateRoleArgs, 'input'>>;
  grantAccess?: Resolver<Maybe<ResolversTypes['GrantAccessPayload']>, ParentType, ContextType, RequireFields<MutationGrantAccessArgs, 'input'>>;
  reparentCollection?: Resolver<Maybe<ResolversTypes['ReparentCollectionPayload']>, ParentType, ContextType, RequireFields<MutationReparentCollectionArgs, 'input'>>;
  reparentItem?: Resolver<Maybe<ResolversTypes['ReparentItemPayload']>, ParentType, ContextType, RequireFields<MutationReparentItemArgs, 'input'>>;
  revokeAccess?: Resolver<Maybe<ResolversTypes['RevokeAccessPayload']>, ParentType, ContextType, RequireFields<MutationRevokeAccessArgs, 'input'>>;
  updateCollection?: Resolver<Maybe<ResolversTypes['UpdateCollectionPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCollectionArgs, 'input'>>;
  updateCommunity?: Resolver<Maybe<ResolversTypes['UpdateCommunityPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCommunityArgs, 'input'>>;
  updateItem?: Resolver<Maybe<ResolversTypes['UpdateItemPayload']>, ParentType, ContextType, RequireFields<MutationUpdateItemArgs, 'input'>>;
  updateRole?: Resolver<Maybe<ResolversTypes['UpdateRolePayload']>, ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'input'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'AssetAudio' | 'AssetDocument' | 'AssetImage' | 'AssetPDF' | 'AssetUnknown' | 'AssetVideo' | 'Collection' | 'CollectionContribution' | 'CollectionLink' | 'CollectionLinkedItem' | 'Community' | 'EntityBreadcrumb' | 'Item' | 'ItemContribution' | 'ItemLink' | 'OrganizationContributor' | 'PersonContributor' | 'Role' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type OrganizationContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationContributor'] = ResolversParentTypes['OrganizationContributor']> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectionContributions?: Resolver<ResolversTypes['CollectionContributionConnection'], ParentType, ContextType, RequireFields<OrganizationContributorCollectionContributionsArgs, never>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemContributions?: Resolver<ResolversTypes['ItemContributionConnection'], ParentType, ContextType, RequireFields<OrganizationContributorItemContributionsArgs, never>>;
  kind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  legalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  links?: Resolver<Array<Maybe<ResolversTypes['ContributorLink']>>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalUnfilteredCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Paginated'] = ResolversParentTypes['Paginated']> = {
  __resolveType: TypeResolveFn<'AnyContributorConnection' | 'CollectionConnection' | 'CollectionContributionConnection' | 'CollectionLinkConnection' | 'CollectionLinkedItemConnection' | 'CommunityConnection' | 'ItemConnection' | 'ItemContributionConnection' | 'ItemLinkConnection' | 'RoleConnection' | 'UserConnection', ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PermissionGrantResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionGrant'] = ResolversParentTypes['PermissionGrant']> = {
  allowed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonContributor'] = ResolversParentTypes['PersonContributor']> = {
  affiliation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectionContributions?: Resolver<ResolversTypes['CollectionContributionConnection'], ParentType, ContextType, RequireFields<PersonContributorCollectionContributionsArgs, never>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemContributions?: Resolver<ResolversTypes['ItemContributionConnection'], ParentType, ContextType, RequireFields<PersonContributorItemContributionsArgs, never>>;
  kind?: Resolver<ResolversTypes['ContributorKind'], ParentType, ContextType>;
  links?: Resolver<Array<Maybe<ResolversTypes['ContributorLink']>>, ParentType, ContextType>;
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  suffix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreviewImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['PreviewImage'] = ResolversParentTypes['PreviewImage']> = {
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dimensions?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreviewImageMapResolvers<ContextType = any, ParentType extends ResolversParentTypes['PreviewImageMap'] = ResolversParentTypes['PreviewImageMap']> = {
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dimensions?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  png?: Resolver<Maybe<ResolversTypes['PreviewImage']>, ParentType, ContextType>;
  webp?: Resolver<Maybe<ResolversTypes['PreviewImage']>, ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QueryCollectionArgs, 'slug'>>;
  communities?: Resolver<ResolversTypes['CommunityConnection'], ParentType, ContextType, RequireFields<QueryCommunitiesArgs, 'order' | 'pageDirection' | 'perPage'>>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<QueryCommunityArgs, 'slug'>>;
  contributor?: Resolver<Maybe<ResolversTypes['AnyContributor']>, ParentType, ContextType, RequireFields<QueryContributorArgs, 'slug'>>;
  contributors?: Resolver<ResolversTypes['AnyContributorConnection'], ParentType, ContextType, RequireFields<QueryContributorsArgs, 'order' | 'kind' | 'pageDirection' | 'perPage'>>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemArgs, 'slug'>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>;
  nodes?: Resolver<Array<Maybe<ResolversTypes['Node']>>, ParentType, ContextType, RequireFields<QueryNodesArgs, 'ids'>>;
  roles?: Resolver<ResolversTypes['RoleConnection'], ParentType, ContextType, RequireFields<QueryRolesArgs, 'order'>>;
  users?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<QueryUsersArgs, 'order' | 'pageDirection' | 'perPage'>>;
  viewer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};

export type ReparentCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReparentCollectionPayload'] = ResolversParentTypes['ReparentCollectionPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReparentItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReparentItemPayload'] = ResolversParentTypes['ReparentItemPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RevokeAccessPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['RevokeAccessPayload'] = ResolversParentTypes['RevokeAccessPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['AnyEntity']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  revoked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  accessControlList?: Resolver<ResolversTypes['AccessControlList'], ParentType, ContextType>;
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleConnection'] = ResolversParentTypes['RoleConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RoleEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleEdge'] = ResolversParentTypes['RoleEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SlugScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Slug'], any> {
  name: 'Slug';
}

export type SluggableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sluggable'] = ResolversParentTypes['Sluggable']> = {
  __resolveType: TypeResolveFn<'AssetAudio' | 'AssetDocument' | 'AssetImage' | 'AssetPDF' | 'AssetUnknown' | 'AssetVideo' | 'Collection' | 'CollectionContribution' | 'CollectionLink' | 'CollectionLinkedItem' | 'Community' | 'Item' | 'ItemContribution' | 'ItemLink' | 'OrganizationContributor' | 'PersonContributor' | 'Role' | 'User', ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
};

export type UpdateCollectionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCollectionPayload'] = ResolversParentTypes['UpdateCollectionPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCommunityPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCommunityPayload'] = ResolversParentTypes['UpdateCommunityPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateItemPayload'] = ResolversParentTypes['UpdateItemPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateRolePayload'] = ResolversParentTypes['UpdateRolePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errors?: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  haltCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  allowedActions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  collections?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<UserCollectionsArgs, 'access' | 'order' | 'nodeFilter' | 'pageDirection' | 'perPage'>>;
  communities?: Resolver<ResolversTypes['CommunityConnection'], ParentType, ContextType, RequireFields<UserCommunitiesArgs, 'access' | 'order' | 'nodeFilter' | 'pageDirection' | 'perPage'>>;
  createdAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  globalAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<UserItemsArgs, 'access' | 'order' | 'nodeFilter' | 'pageDirection' | 'perPage'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionGrant']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['Slug'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['ISO8601DateTime'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserError'] = ResolversParentTypes['UserError']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccessControlList?: AccessControlListResolvers<ContextType>;
  AnyAsset?: AnyAssetResolvers<ContextType>;
  AnyAttachable?: AnyAttachableResolvers<ContextType>;
  AnyContributor?: AnyContributorResolvers<ContextType>;
  AnyContributorConnection?: AnyContributorConnectionResolvers<ContextType>;
  AnyContributorEdge?: AnyContributorEdgeResolvers<ContextType>;
  AnyEntity?: AnyEntityResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssetAudio?: AssetAudioResolvers<ContextType>;
  AssetDocument?: AssetDocumentResolvers<ContextType>;
  AssetImage?: AssetImageResolvers<ContextType>;
  AssetPDF?: AssetPdfResolvers<ContextType>;
  AssetPreview?: AssetPreviewResolvers<ContextType>;
  AssetUnknown?: AssetUnknownResolvers<ContextType>;
  AssetVideo?: AssetVideoResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionConnection?: CollectionConnectionResolvers<ContextType>;
  CollectionContribution?: CollectionContributionResolvers<ContextType>;
  CollectionContributionConnection?: CollectionContributionConnectionResolvers<ContextType>;
  CollectionContributionEdge?: CollectionContributionEdgeResolvers<ContextType>;
  CollectionEdge?: CollectionEdgeResolvers<ContextType>;
  CollectionLink?: CollectionLinkResolvers<ContextType>;
  CollectionLinkConnection?: CollectionLinkConnectionResolvers<ContextType>;
  CollectionLinkEdge?: CollectionLinkEdgeResolvers<ContextType>;
  CollectionLinkedItem?: CollectionLinkedItemResolvers<ContextType>;
  CollectionLinkedItemConnection?: CollectionLinkedItemConnectionResolvers<ContextType>;
  CollectionLinkedItemEdge?: CollectionLinkedItemEdgeResolvers<ContextType>;
  CollectionParent?: CollectionParentResolvers<ContextType>;
  Community?: CommunityResolvers<ContextType>;
  CommunityConnection?: CommunityConnectionResolvers<ContextType>;
  CommunityEdge?: CommunityEdgeResolvers<ContextType>;
  Contributable?: ContributableResolvers<ContextType>;
  Contribution?: ContributionResolvers<ContextType>;
  Contributor?: ContributorResolvers<ContextType>;
  ContributorLink?: ContributorLinkResolvers<ContextType>;
  CreateAssetPayload?: CreateAssetPayloadResolvers<ContextType>;
  CreateCollectionPayload?: CreateCollectionPayloadResolvers<ContextType>;
  CreateCommunityPayload?: CreateCommunityPayloadResolvers<ContextType>;
  CreateItemPayload?: CreateItemPayloadResolvers<ContextType>;
  CreateRolePayload?: CreateRolePayloadResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  EntityBreadcrumb?: EntityBreadcrumbResolvers<ContextType>;
  ExposesPermissions?: ExposesPermissionsResolvers<ContextType>;
  GrantAccessPayload?: GrantAccessPayloadResolvers<ContextType>;
  HierarchicalEntry?: HierarchicalEntryResolvers<ContextType>;
  ISO8601Date?: GraphQLScalarType;
  ISO8601DateTime?: GraphQLScalarType;
  Item?: ItemResolvers<ContextType>;
  ItemConnection?: ItemConnectionResolvers<ContextType>;
  ItemContribution?: ItemContributionResolvers<ContextType>;
  ItemContributionConnection?: ItemContributionConnectionResolvers<ContextType>;
  ItemContributionEdge?: ItemContributionEdgeResolvers<ContextType>;
  ItemEdge?: ItemEdgeResolvers<ContextType>;
  ItemLink?: ItemLinkResolvers<ContextType>;
  ItemLinkConnection?: ItemLinkConnectionResolvers<ContextType>;
  ItemLinkEdge?: ItemLinkEdgeResolvers<ContextType>;
  ItemParent?: ItemParentResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  OrganizationContributor?: OrganizationContributorResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Paginated?: PaginatedResolvers<ContextType>;
  PermissionGrant?: PermissionGrantResolvers<ContextType>;
  PersonContributor?: PersonContributorResolvers<ContextType>;
  PreviewImage?: PreviewImageResolvers<ContextType>;
  PreviewImageMap?: PreviewImageMapResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReparentCollectionPayload?: ReparentCollectionPayloadResolvers<ContextType>;
  ReparentItemPayload?: ReparentItemPayloadResolvers<ContextType>;
  RevokeAccessPayload?: RevokeAccessPayloadResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RoleConnection?: RoleConnectionResolvers<ContextType>;
  RoleEdge?: RoleEdgeResolvers<ContextType>;
  Slug?: GraphQLScalarType;
  Sluggable?: SluggableResolvers<ContextType>;
  UpdateCollectionPayload?: UpdateCollectionPayloadResolvers<ContextType>;
  UpdateCommunityPayload?: UpdateCommunityPayloadResolvers<ContextType>;
  UpdateItemPayload?: UpdateItemPayloadResolvers<ContextType>;
  UpdateRolePayload?: UpdateRolePayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserError?: UserErrorResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
