import React from "react";
import { graphql } from "react-relay";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { GetLayout } from "@wdp/lib/types/page";
import { AnnouncementSlugCollectionQuery as Query } from "@/relay/AnnouncementSlugCollectionQuery.graphql";
import EntityAnnouncementLayoutFactory from "components/factories/EntityAnnouncementLayoutFactory";
import CollectionLayoutQuery from "components/composed/collections/CollectionLayoutQuery";

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
