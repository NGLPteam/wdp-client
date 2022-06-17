import * as React from "react";
import { graphql } from "react-relay";
import Link from "next/link";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./InstallationName.styles";
import { InstallationNameFragment$key } from "@/relay/InstallationNameFragment.graphql";
import { useGlobalContext } from "contexts";
import { Image } from "components/atomic";

export default function InstallationName({ className = "t-label-mix" }: Props) {
  const data = useGlobalContext();

  const siteData = useMaybeFragment<InstallationNameFragment$key>(
    fragment,
    data?.globalConfiguration
  );

  const linkClasses = "a-link";

  return siteData?.site?.installationName ? (
    <Link href="/" passHref>
      <Styled.Link className={className}>
        {siteData?.logo?.storage &&
          (siteData?.site?.logoMode === "SANS_TEXT" ? (
            <Image
              data={siteData.logo.sansText?.webp}
              width={siteData.logo.sansText?.webp?.width || 40}
              height={40}
              alt={siteData.site.installationName}
            />
          ) : (
            <>
              <Image
                data={siteData.logo.withText?.webp}
                width={40}
                height={40}
              />
              <Styled.Name>
                {/* Extra wrapper is needed for hover link styles */}
                <span className={linkClasses}>
                  {siteData.site.installationName}
                </span>
              </Styled.Name>
            </>
          ))}
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
