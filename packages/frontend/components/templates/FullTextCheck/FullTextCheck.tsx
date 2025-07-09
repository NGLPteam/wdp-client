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

  const body = main?.templates?.[0]?.slots?.body;

  const hasFullText = !!body && body.valid && !!body.content;

  return (
    <FullTextCheckContext.Provider value={hasFullText}>
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
  const hasFullText = useFullTextCheck();

  if (!hasFullText) redirect(redirectPath);

  return children;
};

const fragment = graphql`
  fragment FullTextCheckFragment on EntityLayouts {
    main {
      templates {
        ... on DetailTemplateInstance {
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
