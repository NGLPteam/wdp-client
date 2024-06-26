import { useEffect, useImperativeHandle, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { DialogDisclosure, useDialogState } from "reakit/Dialog";
import { useRouter } from "next/router";
import { RouteHelper } from "routes";
import { Modal } from "components/layout";
import * as Styled from "./SearchModal.styles";

interface Props {
  className?: string;
  routeName?: string;
  clearOnSubmit?: boolean;
}

export default function SearchModal({
  clearOnSubmit,
  routeName,
  className,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, reset } = useForm();
  const dialog = useDialogState({ visible: false, animated: true });
  const router = useRouter();
  const { t } = useTranslation();
  const { ref, ...rest } = register("q");

  useImperativeHandle(ref, () => inputRef.current);

  const route = routeName ? RouteHelper.findRouteByName(routeName) : null;

  const defaultValue = clearOnSubmit ? "" : router.query?.q || "";

  const onSubmit = (data: Record<string, string>) => {
    dialog.hide();
    router.push({
      pathname: route?.path || router.pathname,
      query: { ...router.query, q: data.q },
    });

    if (clearOnSubmit) reset();
  };

  useEffect(() => {
    if (dialog.visible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [dialog.visible]);

  return (
    <>
      <DialogDisclosure as={Styled.SearchDisclosure} {...dialog}>
        <Styled.SearchIcon icon="search" />
      </DialogDisclosure>
      <Modal dialog={dialog}>
        <form className={className} onSubmit={handleSubmit(onSubmit)}>
          <Styled.SearchWrapper>
            <Styled.SearchIcon icon="search" />
            <Styled.SearchInput
              type="search"
              placeholder={t("forms.fields.search_placeholder")}
              defaultValue={defaultValue}
              {...rest}
              ref={inputRef}
            />
            <Styled.SubmitButton onClick={handleSubmit(onSubmit)}>
              <Styled.SubmitIcon icon="arrow" />
            </Styled.SubmitButton>
          </Styled.SearchWrapper>
        </form>
      </Modal>
    </>
  );
}
