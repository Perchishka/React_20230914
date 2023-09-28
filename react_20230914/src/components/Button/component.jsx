export const Button = ({ id, title, onClick, disabled }) => {
  return (
    <button id={id} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};
