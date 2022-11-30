import { graphql } from "react-relay";
import { useMaybeFragment, usePageContext } from "@wdp/lib/api/hooks";
import { useLatestPresentValue } from "@wdp/lib/hooks";
import AppLayout from "components/global/AppLayout";
import { ItemLayoutFragment$key } from "@/relay/ItemLayoutFragment.graphql";
import EntityHTMLHead from "components/composed/entity/EntityHTMLHead";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import { LoadingBlock } from "components/atomic";

export default function ItemLayout({ data, children }: Props) {
  const queryData = useMaybeFragment(fragment, data);
  const { current: memoizedData } = useLatestPresentValue(queryData);
  const { loading } = usePageContext();

  return (
    <AppLayout
      communityData={memoizedData?.item?.community}
      entityData={memoizedData?.item}
    >
      <EntityHTMLHead data={memoizedData?.item} />
      {loading && !memoizedData?.item ? (
        <LoadingBlock />
      ) : (
        <EntityLayoutFactory data={memoizedData?.item}>
          {children}
        </EntityLayoutFactory>
      )}
    </AppLayout>
  );
}

interface Props {
  data?: ItemLayoutFragment$key | null;
  children: React.ReactNode;
}

const fragment = graphql`
  fragment ItemLayoutFragment on Query
  @argumentDefinitions(slug: { type: "Slug!" }) {
    item(slug: $slug) {
      ...AppLayoutEntityFragment
      ...EntityHTMLHeadFragment
      ...EntityLayoutFactoryFragment

      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
