import Head from "next/head";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { RouteHelper } from "routes";
import { useGlobalContext } from "contexts";
import startCase from "lodash/startCase";
import { HtmlHeadFragment$key } from "@/relay/HtmlHeadFragment.graphql";

interface Props {
  title?: string;
}

export default function HtmlHead({ title }: Props) {
  const { t } = useTranslation();

  const data = useGlobalContext();

  const { site } =
    useFragment<HtmlHeadFragment$key>(fragment, data?.globalConfiguration) ??
    {};

  const route = RouteHelper.activeRoute();

  const appTitle = site?.installationName ?? t("app.title");

  const defaultTitle = route?.label
    ? `${startCase(t(route.label ?? ""))} | ${appTitle}`
    : appTitle;

  return (
    <Head>
      <title>{title ? `${t(title)} | ${defaultTitle}` : defaultTitle}</title>
    </Head>
  );
}

const fragment = graphql`
  fragment HtmlHeadFragment on GlobalConfiguration {
    site {
      installationName
    }
  }
`;
