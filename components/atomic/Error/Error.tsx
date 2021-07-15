// This is a placeholder for more robust error messaging in the future. Fully expect it
// will be moved and adjusted, but it's helpful to see error messages in the meantime.
const Error = ({ error }) => {
  return (
    <div>
      <h3>{error.name}</h3>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
