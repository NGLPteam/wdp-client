import React from "react";
import { Dropdown, NamedLink } from "components/atomic";
import { Authorize } from "components/auth";
import * as Styled from "./Header.styles";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const HeaderNavLinks = ({ navigation }: Props) => {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();
  // Alternatively, you could try matching path with a path set on each nav child:
  // child: { path: '/communities' } === router: { path: '/communities' }
  // or reference the child's model
  // child: { model: 'communities' } === router.query.model;

  // Get the pathname from NamedLink, check if it's currently active
  const renderLink = (child: ChildLink) => {
    if (!child.route) return <></>;

    return (
      <NamedLink route={child.route} passHref>
        {({ pathname }: { pathname: string }) => (
          <Styled.Link active={asPath.indexOf(pathname) === 0}>
            {t(child.label)}
          </Styled.Link>
        )}
      </NamedLink>
    );
  };

  return (
    <>
      {navigation.map((child, i: number) =>
        child.children && child.actions ? (
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
};

interface ChildLink {
  label: string;
  route?: string;
  model?: string;
  actions?: string | string[];
  children?: Omit<ChildLink, "children">[];
}

interface Props {
  navigation: ChildLink[];
}

export default HeaderNavLinks;
