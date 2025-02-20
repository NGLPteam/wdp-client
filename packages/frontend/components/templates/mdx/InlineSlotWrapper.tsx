"use client";

import { useTranslation } from "react-i18next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import useViewerContext from "contexts/useViewerContext";
import NoContent from "@/components/layout/messages/NoContent";
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
  const { t } = useTranslation();

  const { allowedActions } = useViewerContext();

  const isAdmin = allowedActions?.includes("admin.access");

  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult>();

  useEffect(() => {
    const renderMDX = async () => {
      if (content) {
        try {
          const mdx = await serialize(content);
          if (mdx) setMdxContent(mdx);
        } catch (err) {
          console.debug(`MDX error: ${err}`);
          console.debug(`raw content: ${content}`);
        }
      }
    };

    renderMDX();
  }, [content]);

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
      <MDXRemote
        {...mdxContent}
        components={{ ...inlineSlotComponents, ...overrides }}
      />
    </ErrorBoundary>
  ) : null;
}
