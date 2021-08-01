import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";

export type GetLayout = (page: ReactElement) => ReactNode;

// Next.js Component type (NextComponentType<NextPageContext, any, P>;)
// does not include a `getLayout` function, so we need to define Page ourselves.
// eslint-disable-next-line @typescript-eslint/ban-types
export type Page<P = {}> = NextPage<P> & {
  getLayout?: GetLayout;
  layout?: ComponentType;
};
