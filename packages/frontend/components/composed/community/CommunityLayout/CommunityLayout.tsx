import { graphql } from "react-relay";
import { useMaybeFragment, usePageContext } from "@wdp/lib/api/hooks";
import { useLatestPresentValue } from "@wdp/lib/hooks";
import AppLayout from "components/global/AppLayout";
import { CommunityLayoutFragment$key } from "@/relay/CommunityLayoutFragment.graphql";
import { LoadingBlock } from "components/atomic";

export default function CommunityLayout({ data, children }: Props) {
  const queryData = useMaybeFragment(fragment, data);
  const { current: memoizedData } = useLatestPresentValue(queryData);
  const { loading } = usePageContext();

  return (
    <AppLayout
      communityData={memoizedData?.community}
      entityData={memoizedData?.community}
    >
      {loading && !memoizedData?.community ? <LoadingBlock /> : <>{children}</>}
    </AppLayout>
  );
}

interface Props {
  data?: CommunityLayoutFragment$key | null;
  children: React.ReactNode;
}

const fragment = graphql`
  fragment CommunityLayoutFragment on Query
  @argumentDefinitions(slug: { type: "Slug!" }) {
    community(slug: $slug) {
      ...AppLayoutCommunityFragment
      ...AppLayoutEntityFragment
    }
  }
`;
