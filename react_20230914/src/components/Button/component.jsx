export const Button = ({ id, title, onClick }) => {
    return (
      <button id = {id} onClick={onClick} >
        {title}
      </button>
    );
  };

  