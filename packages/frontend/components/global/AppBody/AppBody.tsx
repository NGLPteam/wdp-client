"use client";

import { graphql } from "react-relay";
import { updateI18n } from "i18n";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppBodyFragment$key } from "@/relay/AppBodyFragment.graphql";
import { SearchButtonFragment$key } from "@/relay/SearchButtonFragment.graphql";
import SkipLink from "@/components/global/SkipLink";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import styles from "./AppBody.module.css";

interface Props {
  children: React.ReactNode;
  data?: AppBodyFragment$key | null;
  searchData?: SearchButtonFragment$key | null;
}

function AppBody({ children, data, searchData }: Props) {
  updateI18n("en");

  const globalData = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return (
    <div className={classNames("a-bg-neutral00", styles.content)}>
      <SkipLink toId="main-content" label={t("nav.skip_to_content")} />
      <AppHeader data={globalData} searchData={searchData} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <AppFooter data={globalData} />
    </div>
  );
}

export default AppBody;

const fragment = graphql`
  fragment AppBodyFragment on Query {
    ...AppHeaderFragment
    ...AppFooterFragment
  }
`;
