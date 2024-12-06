import { useMemo } from "react";
import { graphql } from "react-relay";
import Link from "next/link";
import classNames from "classnames";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Image } from "components/atomic";
import { InstallationNameFragment$key } from "@/relay/InstallationNameFragment.graphql";
import styles from "./InstallationName.module.css";

const LOGO_SIZE = 40;

export default function InstallationName({
  className = "t-label-mix",
  data,
}: Props) {
  const siteData = useMaybeFragment(fragment, data);

  const isSvg = siteData?.logo?.original?.originalFilename?.endsWith(".svg");

  const ratio = useMemo(() => {
    return (
      (siteData?.logo?.sansText?.webp?.width || 1) /
      (siteData?.logo?.sansText?.webp?.height || 1)
    );
  }, [siteData]);

  return siteData?.site?.installationName ? (
    <Link href="/">
      <span className={classNames(className, styles.link)}>
        {siteData?.logo?.storage && (
          <Image
            data={isSvg ? siteData.logo.original : siteData.logo.sansText?.webp}
            width={LOGO_SIZE * ratio}
            height={LOGO_SIZE}
            alt={siteData.site.installationName}
          />
        )}
        {(!siteData?.logo?.storage ||
          siteData?.site?.logoMode === "WITH_TEXT") && (
          <span className={styles.name}>{siteData.site.installationName}</span>
        )}
      </span>
    </Link>
  ) : null;
}

type Props = {
  className?: string;
  data?: InstallationNameFragment$key;
};

const fragment = graphql`
  fragment InstallationNameFragment on GlobalConfiguration {
    site {
      installationName
      logoMode
    }
    logo {
      storage
      original {
        originalFilename
        ...ImageFragment
      }
      sansText {
        size
        webp {
          width
          height
          ...ImageFragment
        }
      }
    }
  }
`;
