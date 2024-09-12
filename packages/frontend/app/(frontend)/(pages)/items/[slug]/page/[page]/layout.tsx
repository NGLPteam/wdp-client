import { PropsWithChildren } from "react";
import { ResolvingMetadata, Metadata } from "next";
import { OrderingPageParams } from "@/types/page";
import generatePageMetadata from "./_metadata/page";

export async function generateMetadata(
  props: OrderingPageParams,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return generatePageMetadata(props, parent);
}

export default async function PageLayout({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: OrderingPageParams & PropsWithChildren) {
  return <>{children}</>;
}
