import { graphql } from "react-relay";
import { useMaybeFragment, usePageContext } from "@wdp/lib/api/hooks";
import { useLatestPresentValue } from "@wdp/lib/hooks";
import AppLayout from "components/global/AppLayout";
import { CollectionLayoutFragment$key } from "@/relay/CollectionLayoutFragment.graphql";
import EntityHTMLHead from "components/composed/entity/EntityHTMLHead";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import { LoadingBlock } from "components/atomic";

export default function CollectionLayout({ data, children }: Props) {
  const queryData = useMaybeFragment(fragment, data);
  const { current: memoizedData } = useLatestPresentValue(queryData);
  const { loading } = usePageContext();

  return (
    <AppLayout
      communityData={memoizedData?.collection?.community}
      entityData={memoizedData?.collection}
    >
      <EntityHTMLHead data={memoizedData?.collection} appData={memoizedData} />
      {loading && !memoizedData?.collection ? (
        <LoadingBlock />
      ) : (
        <EntityLayoutFactory data={memoizedData?.collection}>
          {children}
        </EntityLayoutFactory>
      )}
    </AppLayout>
  );
}

interface Props {
  data?: CollectionLayoutFragment$key | null;
  children: React.ReactNode;
}

const fragment = graphql`
  fragment CollectionLayoutFragment on Query
  @argumentDefinitions(slug: { type: "Slug!" }) {
    collection(slug: $slug) {
      ...AppLayoutEntityFragment
      ...EntityHTMLHeadFragment
      ...EntityLayoutFactoryFragment
      community {
        ...AppLayoutCommunityFragment
      }
    }
    ...EntityHTMLHeadAppFragment
  }
`;
