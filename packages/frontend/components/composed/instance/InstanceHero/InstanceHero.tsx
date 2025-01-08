"use client";

import classNames from "classnames";
import { graphql, useFragment } from "react-relay";
import SearchHero from "components/composed/search/SearchHero";
import { Markdown } from "components/atomic";
import { InstanceHeroFragment$key } from "@/relay/InstanceHeroFragment.graphql";
import styles from "./InstanceHero.module.css";

export default function InstanceHero({ data }: Props) {
  const app = useFragment(fragment, data);

  return (
    <>
      <header className={classNames("a-bg-custom10", styles.header)}>
        <div className="l-container-wide">
          <h1 className="t-h2">
            {app?.globalConfiguration.site.installationName || "Meru"}
          </h1>
          {app?.globalConfiguration.site.installationHomePageCopy && (
            <div className={styles.text}>
              <Markdown.Summary>
                {app.globalConfiguration.site.installationHomePageCopy}
              </Markdown.Summary>
            </div>
          )}
        </div>
      </header>
      <SearchHero />
    </>
  );
}

interface Props {
  data: InstanceHeroFragment$key;
}

const fragment = graphql`
  fragment InstanceHeroFragment on Query {
    globalConfiguration {
      site {
        providerName
        installationName
        installationHomePageCopy
      }
    }
  }
`;
