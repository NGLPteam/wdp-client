import { useTranslation } from "react-i18next";
import { useSignInOut } from "hooks/useIsAuthenticated";

const SignInOut = ({ className }: Props) => {
  const { isAuthenticated, handleSignInOut } = useSignInOut();
  const { t } = useTranslation();

  return (
    <button className={className} onClick={handleSignInOut}>
      {isAuthenticated ? t("common.sign_out") : t("common.sign_in")}
    </button>
  );
};

interface Props {
  className?: string;
}

export default SignInOut;
