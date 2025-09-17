import { graphql } from "react-relay";
import classNames from "classnames";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Link } from "@/lib/vendor/react-transition-progress/link";
import { InstallationNameFragment$key } from "@/relay/InstallationNameFragment.graphql";
import styles from "./InstallationName.module.css";

const LOGO_SIZE = 40;

export default function InstallationName({
  className = "t-label-mix",
  data,
}: Props) {
  const { site, logo } = useMaybeFragment(fragment, data) ?? {};

  const isSvg = logo?.original?.originalFilename?.endsWith(".svg");

  const logoImage = isSvg ? logo?.original : logo?.sansText?.webp;

  const ratio =
    (logo?.sansText?.webp?.width || 1) / (logo?.sansText?.webp?.height || 1);

  return site?.installationName ? (
    <Link href="/">
      <span className={classNames(className, styles.link)}>
        {logoImage?.url && (
          <img
            src={logoImage.url}
            width={LOGO_SIZE * ratio}
            height={LOGO_SIZE}
            alt={`${site.installationName} logo`}
          />
        )}
        {(!logoImage?.url || site?.logoMode === "WITH_TEXT") && (
          <span className={styles.name}>{site.installationName}</span>
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
        alt
        url
        width
        height
      }
      sansText {
        size
        webp {
          alt
          url
          width
          height
        }
      }
    }
  }
`;
