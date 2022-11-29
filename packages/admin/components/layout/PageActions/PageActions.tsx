import * as Styled from "./PageActions.styled";

/**
 * Wrapper for search bar and action buttons
 */
const PageActions = ({ search, actions }: Props) => {
  return (
    <Styled.Wrapper className="l-grid">
      {<div className="l-grid__item l-grid__item--4">{search}</div>}
      {actions && (
        <Styled.Actions className="l-grid__item l-grid__item--8">
          {actions}
        </Styled.Actions>
      )}
    </Styled.Wrapper>
  );
};

interface Props {
  /** Search component */
  search?: React.ReactNode;
  /** One or more ButtonControl actions */
  actions?: React.ReactNode | React.ReactNode[];
}

export default PageActions;
