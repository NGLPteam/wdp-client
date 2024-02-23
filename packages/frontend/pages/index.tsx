import React from "react";
import { graphql } from "relay-runtime";
import { QueryWrapper } from "@wdp/lib/api/components";
import InstanceContentLayout from "components/composed/instance/InstanceContentLayout";
import { pagesQuery as Query } from "@/relay/pagesQuery.graphql";

import AppLayout from "components/global/AppLayout";
import {
  getStaticGlobalContextData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";

export async function getStaticProps() {
  const props = await getStaticGlobalContextData();

  return {
    props,
    revalidate: STATIC_PROPS_REVALIDATE,
  };
}

export default function HomePage() {
  return (
    <>
      <QueryWrapper<Query> query={query}>
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
