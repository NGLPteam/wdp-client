import styled from "styled-components";

const ServiceProviderBar = ({ className }: Props) => {
  return (
    <div className={className}>
      <span className="t-label-md">Service Provider Name</span>
    </div>
  );
};

interface Props extends React.HTMLProps<HTMLDivElement> {}

const StyledServiceProviderBar = styled(ServiceProviderBar)`
  margin: 0 auto;
  width: 100%;
  background: var(--brand90);
  padding: 12px var(--container-column-margin);
  color: var(--brand20);
  text-align: center;
`;

export default StyledServiceProviderBar;
