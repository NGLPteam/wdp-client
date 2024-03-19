import { useMemo } from "react";
import * as React from "react";
import { graphql } from "react-relay";
import Link from "next/link";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useGlobalContext } from "contexts";
import { Image } from "components/atomic";
import { InstallationNameFragment$key } from "@/relay/InstallationNameFragment.graphql";
import * as Styled from "./InstallationName.styles";

const LOGO_SIZE = 40;

export default function InstallationName({ className = "t-label-mix" }: Props) {
  const data = useGlobalContext();

  const siteData = useMaybeFragment<InstallationNameFragment$key>(
    fragment,
    data?.globalConfiguration,
  );

  const linkClasses = "a-link";

  const isSvg = siteData?.logo?.original?.originalFilename?.endsWith(".svg");

  const ratio = useMemo(() => {
    return (
      (siteData?.logo?.sansText?.webp?.width || 1) /
      (siteData?.logo?.sansText?.webp?.height || 1)
    );
  }, [siteData]);

  return siteData?.site?.installationName ? (
    <Link href="/" passHref legacyBehavior>
      <Styled.Link className={className}>
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
          <Styled.Name>
            {/* Extra wrapper is needed for hover link styles */}
            <span className={linkClasses}>
              {siteData.site.installationName}
            </span>
          </Styled.Name>
        )}
      </Styled.Link>
    </Link>
  ) : null;
}

type Props = {
  className?: string;
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
