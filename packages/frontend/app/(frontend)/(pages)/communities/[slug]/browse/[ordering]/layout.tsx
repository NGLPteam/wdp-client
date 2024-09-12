import { PropsWithChildren } from "react";
import { ResolvingMetadata, Metadata } from "next";
import { OrderingPageParams } from "@/types/page";
import generateOrderingMetadata from "./_metadata/ordering";

export async function generateMetadata(
  props: OrderingPageParams,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return generateOrderingMetadata(props, parent);
}

export default async function OrderingLayout({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: OrderingPageParams & PropsWithChildren) {
  return <>{children}</>;
}
