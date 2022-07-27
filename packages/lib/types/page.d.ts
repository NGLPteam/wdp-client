import { ComponentType, ReactNode } from "react";
import { NextPage } from "next";
import type { GraphQLTaggedNode, OperationType } from "relay-runtime";

export interface GetLayoutProps<P = Record<string, unknown>> {
  PageComponent: ComponentType<P>;
  pageComponentProps: P;
}

export type GetLayout<P = Record<string, unknown>> = (
  props: GetLayoutProps<P>
) => ReactNode;

// Next.js Component type (NextComponentType<NextPageContext, any, P>;)
// does not include a `getLayout` function, so we need to define Page ourselves.
export type Page<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: GetLayout;
  layout?: ComponentType<P>;
};

interface QueryPageComponentProps<Q extends OperationType> {
  data?: Q["response"] | null;
}

type QueryLayoutProps<P extends QueryPageComponentProps, LayoutProps> = Omit<
  LayoutProps,
  "children"
> & {
  PageComponent: ComponentType<P>;
  query: GraphQLTaggedNode;
  pageComponentProps: P;
  refetchTags?: string[];
};
