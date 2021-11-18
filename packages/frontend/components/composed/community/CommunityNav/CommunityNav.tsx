import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import CommunityName from "../CommunityName";
import * as Styled from "./CommunityNav.styles";
import { IconFactory } from "components/factories";
import { Dropdown, SearchButton } from "components/atomic";
import { CommunityNavFragment$key } from "@/relay/CommunityNavFragment.graphql";

export default function CommunityNav({ data }: Props) {
  const community = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return community ? (
    <div className="a-bg-custom10">
      <Styled.Nav className="l-container-wide">
        <Styled.LeftSide>
          <CommunityName data={community} />
        </Styled.LeftSide>
        <Styled.RightSide>
          <Styled.NavList>
            <li>
              <Dropdown
                label={t("nav.explore")}
                disclosure={
                  <Styled.NavButton>
                    <span className="t-label-lg">{t("nav.explore")}</span>
                    <IconFactory icon="chevronDown" />
                  </Styled.NavButton>
                }
                menuItems={[
                  <a
                    key={1}
                    className="t-copy-sm l-flex l-flex--gap-sm l-flex--align-center"
                    href="#"
                  >
                    <span>{t("nav.browse_all")}</span>
                    <IconFactory icon="arrowRight" />
                  </a>,
                ]}
              />
            </li>
            <li>
              <Dropdown
                label={t("nav.categories")}
                disclosure={
                  <Styled.NavButton>
                    <span className="t-label-lg">{t("nav.categories")}</span>
                    <IconFactory icon="chevronDown" />
                  </Styled.NavButton>
                }
                menuItems={[
                  <a
                    key={1}
                    className="t-copy-sm l-flex l-flex--gap-sm l-flex--align-center"
                    href="#"
                  >
                    <span>{t("nav.browse_all")}</span>
                    <IconFactory icon="arrowRight" />
                  </a>,
                ]}
              />
            </li>
            <li>
              <a href="#" className="t-label-lg">
                {t("nav.about")}
              </a>
            </li>
          </Styled.NavList>
          <SearchButton size="lg" />
        </Styled.RightSide>
      </Styled.Nav>
    </div>
  ) : null;
}

interface Props {
  data?: CommunityNavFragment$key | null;
}

const fragment = graphql`
  fragment CommunityNavFragment on Community {
    ...CommunityNameFragment
  }
`;
