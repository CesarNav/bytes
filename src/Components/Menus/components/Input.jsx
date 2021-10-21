const Input = ({ label, ...rest }) => {
  return (
    <>
      <label>{label}</label>
      <input {...rest} />
    </>
  );
};

export default Input;
