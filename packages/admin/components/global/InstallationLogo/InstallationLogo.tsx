import { useMemo } from "react";
import { graphql } from "react-relay";
import Link from "next/link";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./InstallationLogo.styles";
import { useGlobalContext } from "contexts";
import { Image } from "components/atomic";
import { InstallationLogoFragment$key } from "@/relay/InstallationLogoFragment.graphql";

const LOGO_SIZE = 40;

const InstallationLogo = ({ className }: Props) => {
  const data = useGlobalContext();

  const siteData = useMaybeFragment<InstallationLogoFragment$key>(
    fragment,
    data?.globalConfiguration
  );

  const isSvg = siteData?.logo?.original?.originalFilename?.endsWith(".svg");

  const ratio = useMemo(() => {
    return (
      (siteData?.logo?.sansText?.webp?.width || 1) /
      (siteData?.logo?.sansText?.webp?.height || 1)
    );
  }, [siteData]);

  return (
    <Link href="/" passHref>
      <Styled.LogoLink className={className}>
        {siteData?.logo?.storage && (
          <Image
            data={isSvg ? siteData.logo.original : siteData.logo.sansText?.webp}
            width={LOGO_SIZE * ratio}
            height={LOGO_SIZE}
            alt={siteData?.site?.installationName}
          />
        )}
        {(!siteData?.logo?.storage ||
          siteData?.site?.logoMode === "WITH_TEXT") && (
          <Styled.LogoName>{siteData?.site?.installationName}</Styled.LogoName>
        )}
      </Styled.LogoLink>
    </Link>
  );
};

interface Props {
  className?: string;
}

export default InstallationLogo;

const fragment = graphql`
  fragment InstallationLogoFragment on GlobalConfiguration {
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
