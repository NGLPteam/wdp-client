"use client";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import { blockSlotComponents } from "./components";
import AssetButton from "./components/AssetButton";

export default function BlockSlotWrapper({
  content,
  assetAsButton,
}: {
  content?: string | null;
  assetAsButton?: boolean;
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

  const components = assetAsButton
    ? { ...blockSlotComponents, Asset: AssetButton }
    : blockSlotComponents;

  return mdxContent ? (
    <MDXRemote {...mdxContent} components={components} />
  ) : null;
}
