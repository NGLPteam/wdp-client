import React from "react";
import { Dropdown, NamedLink } from "components/atomic";
import { Authorize } from "components/auth";
import * as Styled from "./Header.styles";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

interface NavigationLink {
  label: string;
  route: string;
  model: string;
  actions?: string;
  children?: NavigationLink[];
}

interface Props {
  navigation: NavigationLink[];
}

function HeaderNavLinks({ navigation }: Props) {
  const { t } = useTranslation("common");
  const { pathname } = useRouter();

  const renderLink = (child: NavigationLink) => {
    if (!child.route) return null;
    const active = pathname.indexOf(child.route) === 1;

    return (
      <NamedLink route={child.route} passHref>
        <Styled.Link active={active}>{t(child.label)}</Styled.Link>
      </NamedLink>
    );
  };

  return (
    <>
      {navigation.map((child, i) =>
        child.children ? (
          <Authorize actions={child.actions} key={i}>
            <Styled.Item>
              <Dropdown
                label={t(child.label)}
                disclosure={
                  <Styled.Link as="button">{t(child.label)}</Styled.Link>
                }
                menuItems={child.children.map(renderLink)}
                isDarkMode
              />
            </Styled.Item>
          </Authorize>
        ) : child.actions ? (
          <Authorize actions={child.actions} key={i}>
            <Styled.Item>{renderLink(child)}</Styled.Item>
          </Authorize>
        ) : (
          <Styled.Item key={i}>{renderLink(child)}</Styled.Item>
        )
      )}
    </>
  );
}

export default HeaderNavLinks;
