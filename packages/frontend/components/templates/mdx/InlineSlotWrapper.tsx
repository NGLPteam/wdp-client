"use client";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { useEffect, useState } from "react";
import { inlineSlotComponents } from "./components";
import type { PropsWithChildren } from "react";

const overrides = {
  p: (props: PropsWithChildren) => <span {...props}>{props.children}</span>,
};

export default function InlineSlotWrapper({
  content,
}: {
  content?: string | null;
}) {
  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult>();

  useEffect(() => {
    const renderMDX = async () => {
      if (content) {
        const mdx = await serialize(content);
        if (mdx) setMdxContent(mdx);
      }
    };

    renderMDX();
  }, [content]);

  return mdxContent ? (
    <MDXRemote
      {...mdxContent}
      components={{ ...inlineSlotComponents, ...overrides }}
    />
  ) : null;
}
