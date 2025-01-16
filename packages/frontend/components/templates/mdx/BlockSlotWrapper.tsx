"use client";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import { blockSlotComponents } from "./components";

export default function BlockSlotWrapper({
  content,
}: {
  content?: string | null;
}) {
  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult>();

  useEffect(() => {
    const renderMDX = async () => {
      if (content) {
        const mdx = await serialize(content, {
          mdxOptions: { remarkPlugins: [remarkGfm] },
        });
        if (mdx) setMdxContent(mdx);
      }
    };

    renderMDX();
  }, [content]);

  return mdxContent ? (
    <MDXRemote {...mdxContent} components={blockSlotComponents} />
  ) : null;
}
