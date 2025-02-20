"use client";

import { useTranslation } from "react-i18next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import useViewerContext from "contexts/useViewerContext";
import NoContent from "@/components/layout/messages/NoContent";
import { blockSlotComponents } from "./components";
import AssetButton from "./components/AssetButton";

export default function BlockSlotWrapper({
  content,
  assetAsButton,
}: {
  content?: string | null;
  assetAsButton?: boolean;
}) {
  const { t } = useTranslation();

  const { allowedActions } = useViewerContext();

  const isAdmin = allowedActions?.includes("admin.access");

  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult>();

  useEffect(() => {
    const renderMDX = async () => {
      if (content) {
        try {
          const mdx = await serialize(content, {
            mdxOptions: { remarkPlugins: [remarkGfm] },
          });
          if (mdx) setMdxContent(mdx);
        } catch (err) {
          console.debug(`MDX error: ${err}`);
          console.debug(`raw content: ${content}`);
        }
      }
    };

    renderMDX();
  }, [content]);

  const components = assetAsButton
    ? { ...blockSlotComponents, Asset: AssetButton }
    : blockSlotComponents;

  return mdxContent ? (
    <ErrorBoundary
      fallbackRender={({ error }) => (
        <NoContent
          inline
          message={
            isAdmin
              ? t("messages.admin_content", { error: error.message })
              : t("messages.content")
          }
        />
      )}
    >
      <MDXRemote {...mdxContent} components={components} />
    </ErrorBoundary>
  ) : null;
}
