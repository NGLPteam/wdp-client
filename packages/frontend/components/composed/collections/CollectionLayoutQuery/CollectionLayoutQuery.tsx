import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import AppLayout from "components/global/AppLayout";
import { CollectionLayoutQueryFragment$key } from "@/relay/CollectionLayoutQueryFragment.graphql";

export default function CollectionLayoutQuery({ data, children }: Props) {
  const queryData = useMaybeFragment(fragment, data);

  return (
    <AppLayout
      communityData={queryData?.collection?.community}
      entityData={queryData?.collection}
    >
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
      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
