import { pxToRem } from "@wdp/lib/theme/functions";
import { useTranslation } from "react-i18next";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import SearchModal from "components/layout/SearchModal";
import IconFactory from "@/components/factories/IconFactory";
import { SearchButtonFragment$key } from "@/relay/SearchButtonFragment.graphql";
import styles from "./SearchButton.module.css";

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
      <DialogDisclosure
        as={"button"}
        className={styles.button}
        style={style}
        {...dialog}
      >
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
