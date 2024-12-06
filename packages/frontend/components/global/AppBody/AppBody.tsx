"use client";

import { graphql } from "react-relay";
import { updateI18n } from "i18n";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import useIsMounted from "@wdp/lib/hooks/useIsMounted";
import { AppBodyFragment$key } from "@/relay/AppBodyFragment.graphql";
import { SearchButtonFragment$key } from "@/relay/SearchButtonFragment.graphql";
import SkipLink from "@/components/global/SkipLink";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";

interface Props {
  children: React.ReactNode;
  data?: AppBodyFragment$key | null;
  searchData?: SearchButtonFragment$key | null;
}

function AppBody({ children, data, searchData }: Props) {
  updateI18n("en");

  const globalData = useMaybeFragment(fragment, data);

  const isMounted = useIsMounted();

  const { t } = useTranslation();

  return isMounted ? (
    <div className="a-bg-neutral00">
      <SkipLink toId="main-content" label={t("nav.skip_to_content")} />
      <AppHeader data={globalData} searchData={searchData} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <AppFooter data={globalData} />
    </div>
  ) : null;
}

export default AppBody;

const fragment = graphql`
  fragment AppBodyFragment on Query {
    ...AppHeaderFragment
    ...AppFooterFragment
  }
`;
