import { graphql } from "relay-runtime";
import { PropsWithChildren } from "react";
import getStaticGlobalContextData from "contexts/GlobalStaticContext/getStaticGlobalContextData";
import { GlobalStaticContextProvider } from "contexts/GlobalStaticContext/GlobalStaticContext";
import { Metadata } from "next";
import { ProgressBarProvider } from "@/lib/vendor/react-transition-progress";
import fetchQuery from "@/lib/relay/fetchQuery";
import RelayEnvironmentProvider from "@/lib/relay/RelayClientEnvProvider";
import { layoutAllPagesQuery as Query } from "@/relay/layoutAllPagesQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { SessionProvider } from "@/lib/auth/session";
import { ViewerContextProvider } from "@/contexts/ViewerContext";
import AppBody from "@/components/global/AppBody";
import { BasePageParams } from "@/types/page";
import ProgressBar from "@/components/atomic/loading/ProgressBar";
import generateSiteMetadata from "./_metadata/site";

export const revalidate = 3600;

export async function generateMetadata(
  props: BasePageParams,
): Promise<Metadata> {
  return generateSiteMetadata(props);
}

export default async function PageLayout({ children }: PropsWithChildren) {
  const globalData = await getStaticGlobalContextData();

  const { data, records } = await fetchQuery<Query>(query, {});

  return (
    <>
      <SessionProvider>
        <GlobalStaticContextProvider globalData={globalData}>
          <RelayEnvironmentProvider>
            <ViewerContextProvider data={data}>
              <UpdateClientEnvironment records={records}>
                <ProgressBarProvider>
                  <ProgressBar />
                  <AppBody data={data}>{children}</AppBody>
                </ProgressBarProvider>
              </UpdateClientEnvironment>
            </ViewerContextProvider>
          </RelayEnvironmentProvider>
        </GlobalStaticContextProvider>
      </SessionProvider>
    </>
  );
}

const query = graphql`
  query layoutAllPagesQuery {
    ...ViewerContextFragment
    ...AppBodyFragment
  }
`;
