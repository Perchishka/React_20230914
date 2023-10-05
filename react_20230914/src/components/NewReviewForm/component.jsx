import { useReducer } from "react";
import { Button } from "../BaseComponents/Button/component";

const DEFAULT_VALUE = {
  name: "",
  text: "",
  rating: "",
};

const reducer = (state, action) => {
  switch (action?.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setText":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    case "save":
      return { ...DEFAULT_VALUE };
    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  return (
    <div>
      <div>
        <span>Name </span>
        <input
          value={formValue.name}
          onChange={(event) => {
            dispatch({ type: "setName", payload: event.target.value });
          }}
        />
      </div>
      <div>
        <span>Text </span>
        <input
          value={formValue.text}
          onChange={(event) => {
            dispatch({ type: "setText", payload: event.target.value });
          }}
        />
      </div>
      <div>
        <span>Rating </span>
        <input
          value={formValue.rating}
          onChange={(event) => {
            dispatch({ type: "setRating", payload: event.target.value });
          }}
        />
      </div>
      <Button title="Add review" onClick={() => dispatch({ type: "save" })} />
    </div>
  );
};
