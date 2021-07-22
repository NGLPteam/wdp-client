import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";

// Next.js Component type (NextComponentType<NextPageContext, any, P>;)
// does not include a `getLayout` function, so we need to define Page ourselves.
// eslint-disable-next-line @typescript-eslint/ban-types
export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
