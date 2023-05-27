import "./index.css";

const Button = ({ disabled, onClick }: any) => {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      Add
    </button>
  );
};

export default Button;
