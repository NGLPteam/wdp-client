import React from "react";
import { pxToRem } from "@wdp/lib/theme/functions";
import { useTranslation } from "react-i18next";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./SearchButton.styles";
import { IconFactory } from "components/factories";
import SearchModal from "components/layout/SearchModal";
import { SearchButtonFragment$key } from "@/relay/SearchButtonFragment.graphql";

export default function SearchButton({ data, size = "sm" }: Props) {
  const { t } = useTranslation();
  const imageSize = size === "sm" ? 32 : 72;
  const style = {
    "--search-button-size": `${pxToRem(imageSize)}`,
  } as React.CSSProperties;
  const dialog = useDialogState({ modal: true });
  const searchData = useMaybeFragment(fragment, data);

  return (
    <>
      <DialogDisclosure as={Styled.ButtonWrapper} style={style} {...dialog}>
        <IconFactory
          icon={size === "sm" ? "search" : "search32"}
          role="presentation"
        />
        <span className="a-hidden">{t("search.label")}</span>
      </DialogDisclosure>
      <SearchModal dialog={dialog} data={searchData} />
    </>
  );
}

interface Props {
  data?: SearchButtonFragment$key | null;
  size?: "sm" | "lg";
}

const fragment = graphql`
  fragment SearchButtonFragment on Entity {
    ...SearchModalFragment
  }
`;
