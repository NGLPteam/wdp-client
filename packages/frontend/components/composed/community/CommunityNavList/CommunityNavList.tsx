import React from "react";
import { NamedLink, useRouteSlug } from "@wdp/lib/routes";
import { useTranslation } from "react-i18next";
import * as Styled from "./CommunityNavList.styles";
import { IconFactory } from "components/factories";
import { Dropdown } from "components/atomic";

export default function CommunityNavList({ condensed }: Props) {
  const slug = useRouteSlug();
  const { t } = useTranslation();
  const linkClassName = condensed ? "t-label-sm" : "t-label-lg";

  function getDisclosure(label: string) {
    return (
      <Styled.NavButton>
        <span className={linkClassName}>{t(label)}</span>
        <IconFactory icon="chevronDown" />
      </Styled.NavButton>
    );
  }

  return (
    <Styled.NavList condensed={condensed}>
      <li>
        <Dropdown
          label={t("nav.explore")}
          disclosure={getDisclosure("nav.explore")}
          menuItems={[
            <a
              key={1}
              className="l-flex l-flex--gap-sm l-flex--align-center"
              href="#"
            >
              <span>{t("nav.browse_all")}</span>
              <IconFactory icon="arrowRight" />
            </a>,
          ]}
        />
      </li>
      {slug && (
        <li>
          <NamedLink route="community.about" routeParams={{ slug }} passHref>
            <Styled.NavButton as="a" href="#">
              <span className={linkClassName}>{t("nav.about")}</span>
            </Styled.NavButton>
          </NamedLink>
        </li>
      )}
    </Styled.NavList>
  );
}

interface Props {
  condensed?: boolean;
}
