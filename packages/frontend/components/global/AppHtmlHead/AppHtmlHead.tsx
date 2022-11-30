import Head from "next/head";
import { useRouter } from "next/router";
import { useGlobalStaticContext } from "contexts/GlobalStaticContext";
import { getOrigin } from "helpers";

export default function AppHtmlHead() {
  const staticData = useGlobalStaticContext();
  const installationName =
    staticData?.globalConfiguration?.site?.installationName;
  const description =
    staticData?.globalConfiguration?.site?.footer?.description;

  const router = useRouter();
  const origin = getOrigin();

  return (
    <Head>
      <title>{installationName || "WDP"}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      {installationName && (
        <>
          <meta property="og:site_name" content={installationName} />
          <meta name="twitter:title" content={installationName} />
        </>
      )}
      {description && (
        <>
          <meta name="og:description" content={description} />
          <meta name="twitter:card" content={description} />
        </>
      )}
      {origin && <meta name="og:url" content={`${origin}${router.asPath}`} />}
    </Head>
  );
}
