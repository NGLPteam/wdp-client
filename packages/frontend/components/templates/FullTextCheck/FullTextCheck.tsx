"use client";

import { PropsWithChildren, createContext, useContext } from "react";
import { redirect } from "next/navigation";
import { graphql, useFragment } from "react-relay";
import { FullTextCheckFragment$key } from "@/relay/FullTextCheckFragment.graphql";

type Props = PropsWithChildren & {
  data?: FullTextCheckFragment$key | null;
};

const FullTextCheckContext = createContext(true);

export default function FullTextCheck({ data, children }: Props) {
  const { main } = useFragment(fragment, data) ?? {};

  const fullDetailTemplate = main?.templates?.find(
    (t) => t.definition?.variant === "FULL",
  );

  const body = fullDetailTemplate?.slots?.body;

  const hasFullText = !!body && body.valid && !!body.content;
  const showBody = fullDetailTemplate?.definition?.showBody;

  const renderMainLayout = showBody ? hasFullText : true;

  return (
    <FullTextCheckContext.Provider value={renderMainLayout}>
      {children}
    </FullTextCheckContext.Provider>
  );
}

export const useFullTextCheck = () => {
  return useContext(FullTextCheckContext);
};

export const FullTextCheckRedirect = ({
  children,
  redirectPath,
}: {
  children: React.ReactNode;
  redirectPath: string;
}) => {
  const renderMainLayout = useFullTextCheck();

  if (!renderMainLayout) redirect(redirectPath);

  return children;
};

export const FullTextFallback = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const renderMainLayout = useFullTextCheck();

  if (renderMainLayout) return null;

  return children;
};

const fragment = graphql`
  fragment FullTextCheckFragment on EntityLayouts {
    main {
      templates {
        ... on DetailTemplateInstance {
          definition {
            showBody
            variant
          }
          slots {
            body {
              valid
              content
            }
          }
        }
      }
    }
  }
`;
