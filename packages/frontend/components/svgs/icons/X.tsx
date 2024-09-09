import Props from "./iconType";

export default function X({ title, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M18.4735 14.2512L28.1526 3H25.859L17.4546 12.7692L10.7421 3H3L13.1507 17.7728L3 29.5714H5.29376L14.169 19.2547L21.2579 29.5714H29L18.473 14.2512H18.4735ZM15.3319 17.9029L14.3034 16.4319L6.12024 4.72671H9.64332L16.2473 14.1732L17.2757 15.6442L25.8601 27.9232H22.337L15.3319 17.9035V17.9029Z" />
    </svg>
  );
}
