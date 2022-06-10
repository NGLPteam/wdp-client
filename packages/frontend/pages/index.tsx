import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { fetchQuery } from "relay-runtime";
import { environment } from "@wdp/lib/app";
import InstanceContentLayout from "components/composed/instance/InstanceContentLayout";
import { pagesQuery as Query } from "@/relay/pagesQuery.graphql";
import {
  pagesIndexQuery,
  pagesIndexQueryResponse,
} from "@/relay/pagesIndexQuery.graphql";
import AppLayout from "components/global/AppLayout";
import { AppHtmlHead } from "components/global";

export async function getStaticProps() {
  const env = environment();
  const queryProps = await fetchQuery<pagesIndexQuery>(
    env,
    indexQuery,
    {}
  ).toPromise();

  return {
    props: {
      ...queryProps,
    },
  };
}

export default function HomePage(props: pagesIndexQueryResponse) {
  const slug = useRouteSlug();

  return (
    <>
      <AppHtmlHead data={props} />
      <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
        {({ data }) => (
          <AppLayout>
            <InstanceContentLayout data={data} />
          </AppLayout>
        )}
      </QueryWrapper>
    </>
  );
}

const query = graphql`
  query pagesQuery {
    ...InstanceContentLayoutFragment
  }
`;

const indexQuery = graphql`
  query pagesIndexQuery {
    globalConfiguration {
      site {
        providerName
        installationName
      }
    }
    ...AppHtmlHeadFragment
  }
`;
