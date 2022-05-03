import { graphql } from "react-relay";
import Head from "next/head";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppHtmlHeadFragment$key } from "@/relay/AppHtmlHeadFragment.graphql";

export default function AppHtmlHead({ data }: Props) {
  const app = useMaybeFragment(fragment, data);

  const siteConfig = app?.globalConfiguration.site;

  const title = siteConfig?.installationName || "WDP";

  const summary = siteConfig?.footer.description;

  return (
    <Head>
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      {summary && (
        <>
          <meta name="og:description" content={summary} />
          <meta name="twitter:card" content={summary} />
        </>
      )}
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
  );
}

interface Props {
  data?: AppHtmlHeadFragment$key | null;
}

const fragment = graphql`
  fragment AppHtmlHeadFragment on Query {
    globalConfiguration {
      site {
        providerName
        installationName
        footer {
          description
        }
      }
    }
  }
`;
