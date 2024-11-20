import capitalize from "lodash/capitalize";
import { getRouteByEntityType } from "@/helpers/routes";
import NamedLink from "@/components/atomic/links/NamedLink";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  kind: "collection" | "community" | "item";
  slug: string;
};

export default function EntityLink({ kind, slug, children }: Props) {
  const href = `/${getRouteByEntityType(capitalize(kind))}/${slug}`;

  return <NamedLink href={href}>{children}</NamedLink>;
}
