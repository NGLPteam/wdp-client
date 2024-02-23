import React from "react";
import { graphql } from "relay-runtime";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import { AnnouncementSlugCollectionQuery as Query } from "@/relay/AnnouncementSlugCollectionQuery.graphql";
import EntityAnnouncementLayoutFactory from "components/factories/EntityAnnouncementLayoutFactory";
import CollectionLayoutQuery from "components/composed/collections/CollectionLayoutQuery";
import {
  getStaticGlobalContextData,
  getStaticEntityData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getStaticGlobalContextData();
  const entityData = await getStaticEntityData(context);

  return {
    props: { ...props, entityData },
    revalidate: STATIC_PROPS_REVALIDATE,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function AnnouncementPage({ data }: Props) {
  return <EntityAnnouncementLayoutFactory data={data?.collection} />;
}

const GetCollectionLayout: GetLayout<Props> = (props) => {
  const router = useRouter();
  const announcementSlug = routeQueryArrayToString(router.query.announcement);

  return (
    <CollectionLayoutQuery<Query, Props>
      query={query}
      variables={{ announcementSlug }}
      {...props}
    />
  );
};

type Props = {
  data: Query["response"];
};

AnnouncementPage.getLayout = GetCollectionLayout;

const query = graphql`
  query AnnouncementSlugCollectionQuery(
    $slug: Slug!
    $announcementSlug: Slug!
  ) {
    collection(slug: $slug) {
      ...EntityAnnouncementLayoutFactoryFragment
    }
    ...CollectionLayoutQueryFragment @arguments(slug: $slug)
  }
`;
