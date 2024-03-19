import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useGlobalStaticContext } from "contexts/GlobalStaticContext";
import { getOrigin } from "helpers";

export default function AppHtmlHead() {
  const { t } = useTranslation();
  const staticData = useGlobalStaticContext();
  const installationName =
    staticData?.globalConfiguration?.site?.installationName;
  const entity = staticData?.entityData;

  const router = useRouter();
  const origin = getOrigin();

  const title = entity?.title
    ? `${entity.title} - ${installationName}`
    : installationName || t("app.title");

  const description =
    entity?.summary ??
    staticData?.globalConfiguration?.site?.footer?.description;

  const image = !entity
    ? null
    : entity.heroImage?.storage
      ? entity.heroImage.medium?.webp
      : entity.thumbnail?.storage
        ? entity.thumbnail.medium?.webp
        : null;

  const imageMetadata = entity?.heroImageMetadata || entity?.thumbnailMetadata;

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      {installationName && (
        <>
          <meta property="og:site_name" content={installationName} />
        </>
      )}
      {description && (
        <>
          <meta name="og:description" content={description} />
          <meta name="twitter:card" content={description} />
        </>
      )}
      {origin && <meta name="og:url" content={`${origin}${router.asPath}`} />}
      {image?.url && (
        <>
          <meta name="og:image" content={image.url} />
          {image.width && (
            <meta property="og:image:width" content={String(image.width)} />
          )}
          {image.height && (
            <meta property="og:image:height" content={String(image.height)} />
          )}
          <meta name="twitter:image" content={image.url} />
          <meta name="og:image:alt" content={imageMetadata?.alt || ""} />
          <meta name="twitter:image:alt" content={imageMetadata?.alt || ""} />
        </>
      )}
    </Head>
  );
}
