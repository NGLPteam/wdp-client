import React, { useRef, useCallback, useEffect } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useToggle } from "@wdp/lib/hooks";
import { useUID } from "react-uid";
import { useFocusTrap } from "@castiron/hooks/";
import { useWindowSize } from "@wdp/lib/hooks";
import { breakpoints } from "theme/base/variables";
import MobileMenuToggle from "../../layout/MobileMenuToggle";
import MobileMenu from "../../layout/MobileMenu";
import InstallationName from "../../composed/instance/InstallationName";
import CommunityPicker from "../../composed/instance/InstallationName/CommunityPicker";
import * as Styled from "./AppHeader.styles";
import { AppHeaderFragment$key } from "@/relay/AppHeaderFragment.graphql";
import AccountDropdown from "components/composed/viewer/AccountDropdown";

function AppHeader({ data }: Props) {
  const appData = useMaybeFragment(fragment, data);

  const { t } = useTranslation();
  const mobileNavId = useUID();
  const mobileNavRef = useRef(null);
  const [isActive, toggleActive, setActive] = useToggle();
  const { width } = useWindowSize();
  const prevWidth = useRef<number | undefined>();

  useEffect(() => {
    if (isActive) {
      if (prevWidth.current !== width) {
        if (width && width > parseInt(breakpoints[70])) {
          setActive(false);
        }
      }
    }
    prevWidth.current = width;
  }, [width, isActive]);

  useFocusTrap(mobileNavRef, isActive, {
    onDeactivate: useCallback(() => setActive(false), [setActive]),
  });

  return (
    <Styled.Header>
      <Styled.HeaderInner className="l-container-wide">
        {appData && (
          <>
            <Styled.LeftSide>
              <InstallationName data={appData} />
            </Styled.LeftSide>
            <Styled.MobileLeft>
              <CommunityPicker data={appData} />
            </Styled.MobileLeft>
          </>
        )}
        <Styled.RightSide>
          <AccountDropdown />
        </Styled.RightSide>
        <Styled.MobileRight>
          <MobileMenuToggle
            onToggle={toggleActive}
            label={t("nav.menu")}
            icon="arrowDown"
          />
        </Styled.MobileRight>
      </Styled.HeaderInner>
      <MobileMenu
        ref={mobileNavRef}
        id={mobileNavId}
        active={isActive}
        onClose={toggleActive}
        data={appData}
      >
        test
      </MobileMenu>
    </Styled.Header>
  );
}

interface Props {
  data?: AppHeaderFragment$key | null;
}

export default AppHeader;

const fragment = graphql`
  fragment AppHeaderFragment on Query {
    ...InstallationNameFragment
    ...CommunityPickerFragment
  }
`;
