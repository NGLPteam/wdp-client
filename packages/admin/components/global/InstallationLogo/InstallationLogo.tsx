import * as React from "react";
import { graphql } from "react-relay";
import Link from "next/link";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./InstallationLogo.styles";
import { useGlobalContext } from "contexts";
import { Image } from "components/atomic";
import { InstallationLogoFragment$key } from "@/relay/InstallationLogoFragment.graphql";

const InstallationLogo = ({ className }: Props) => {
  const data = useGlobalContext();

  const siteData = useMaybeFragment<InstallationLogoFragment$key>(
    fragment,
    data?.globalConfiguration
  );

  return (
    <Link href="/" passHref>
      <Styled.LogoLink className={className}>
        {siteData?.site?.logoMode === "SANS_TEXT" ? (
          <Image
            data={siteData?.logo?.sansText?.webp}
            width={siteData?.logo?.sansText?.webp?.width || 40}
            height={40}
            alt={siteData?.site?.installationName}
          />
        ) : (
          <>
            <Image
              data={siteData?.logo?.withText?.webp}
              width={40}
              height={40}
            />
            <Styled.LogoName>
              {siteData?.site?.installationName}
            </Styled.LogoName>
          </>
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
      sansText {
        size
        webp {
          ...ImageFragment
          width
        }
      }
      withText {
        size
        webp {
          ...ImageFragment
        }
      }
    }
  }
`;
