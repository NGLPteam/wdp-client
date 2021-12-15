import React from "react";
import { convertToSlug } from "@wdp/lib/helpers";

export default function AnchorElement({ as, anchor, ...props }: Props) {
  const Tag = as;
  const id = convertToSlug(anchor);

  return <Tag id={id} {...props} />;
}

interface Props {
  as: keyof JSX.IntrinsicElements | React.ElementType;
  anchor: string;
}
