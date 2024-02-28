import React from "react";
import { PreloadedQuery } from "react-relay";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import InstanceContentLayout from "components/composed/instance/InstanceContentLayout";
import { query } from "components/composed/instance/InstanceContentLayout/InstanceContentLayout";

import AppLayout from "components/global/AppLayout";
import {
  getStaticGlobalContextData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";
import { InstanceContentLayoutQuery } from "@/relay/InstanceContentLayoutQuery.graphql";

export async function getStaticProps() {
  const props = await getStaticGlobalContextData();

  return {
    props,
    revalidate: STATIC_PROPS_REVALIDATE,
  };
}

type Props = {
  initialQueryRef?: PreloadedQuery<InstanceContentLayoutQuery>;
};

export default function HomePage({ initialQueryRef }: Props) {
  return (
    <>
      <QueryLoaderWrapper<InstanceContentLayoutQuery>
        query={query}
        initialQueryRef={initialQueryRef}
      >
        {({ queryRef }) =>
          queryRef && (
            <AppLayout>
              <InstanceContentLayout queryRef={queryRef} />
            </AppLayout>
          )
        }
      </QueryLoaderWrapper>
    </>
  );
}
