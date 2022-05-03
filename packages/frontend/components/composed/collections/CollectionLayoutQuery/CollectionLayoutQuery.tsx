import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import AppLayout from "components/global/AppLayout";
import { CollectionLayoutQueryFragment$key } from "@/relay/CollectionLayoutQueryFragment.graphql";
import EntityHTMLHead from "components/composed/entity/EntityHTMLHead";

export default function CollectionLayoutQuery({ data, children }: Props) {
  const queryData = useMaybeFragment(fragment, data);

  return (
    <AppLayout
      communityData={queryData?.collection?.community}
      entityData={queryData?.collection}
    >
      <EntityHTMLHead data={queryData?.collection} appData={queryData} />
      {children}
    </AppLayout>
  );
}

interface Props {
  data?: CollectionLayoutQueryFragment$key | null;
  children: React.ReactNode;
}

const fragment = graphql`
  fragment CollectionLayoutQueryFragment on Query
  @argumentDefinitions(slug: { type: "Slug!" }) {
    collection(slug: $slug) {
      ...AppLayoutEntityFragment
      ...EntityHTMLHeadFragment
      community {
        ...AppLayoutCommunityFragment
      }
    }
    ...EntityHTMLHeadAppFragment
  }
`;
