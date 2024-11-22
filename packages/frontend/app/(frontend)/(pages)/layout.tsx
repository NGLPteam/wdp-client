import { graphql } from "relay-runtime";
import { PropsWithChildren } from "react";
import getStaticGlobalContextData from "contexts/GlobalStaticContext/getStaticGlobalContextData";
import { GlobalStaticContextProvider } from "contexts/GlobalStaticContext/GlobalStaticContext";
import ThemeProvider from "contexts/ThemeProvider";
import { Metadata } from "next";
import fetchQuery from "@/lib/relay/fetchQuery";
import RelayEnvironmentProvider from "@/lib/relay/RelayClientEnvProvider";
import StyledComponentsRegistry from "@/lib/styled-components/registry";
import { layoutAllPagesQuery as Query } from "@/relay/layoutAllPagesQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { SessionProvider } from "@/lib/auth/session";
import { ViewerContextProvider } from "@/contexts/ViewerContext";
import { BasePageParams } from "@/types/page";
import generateSiteMetadata from "./_metadata/site";

export async function generateMetadata(
  props: BasePageParams,
): Promise<Metadata> {
  return generateSiteMetadata(props);
}

export default async function PageLayout({ children }: PropsWithChildren) {
  const globalData = await getStaticGlobalContextData();

  const { data, records } = await fetchQuery<Query>(query, {});

  const theme = data?.globalConfiguration?.theme;

  return (
    <SessionProvider>
      <GlobalStaticContextProvider globalData={globalData}>
        <RelayEnvironmentProvider>
          <ViewerContextProvider data={data}>
            <UpdateClientEnvironment records={records}>
              <ThemeProvider theme={theme}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
              </ThemeProvider>
            </UpdateClientEnvironment>
          </ViewerContextProvider>
        </RelayEnvironmentProvider>
      </GlobalStaticContextProvider>
    </SessionProvider>
  );
}

export const dynamic = "force-dynamic";

const query = graphql`
  query layoutAllPagesQuery {
    ...ViewerContextFragment
    globalConfiguration {
      theme {
        color
        font
      }
    }
  }
`;
