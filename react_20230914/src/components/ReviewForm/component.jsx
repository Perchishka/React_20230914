import { useReducer } from "react";
import { Button } from "../BaseComponents/Button/component";
import { RatingInput } from "../RatingInput/component";
import classNames from "classnames";

import styles from "./styles.module.css";

const DEFAULT_VALUE = {
  name: "",
  text: "",
  rating: 1,
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

export const ReviewForm = ({ onSubmit, className }) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  return (
    <div className={classNames(styles.reviewForm, className)}>
      Review Form
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
        <RatingInput value={formValue.rating} onChange={(value) => dispatch({type:"setRating", payload: value })}/>
      </div>
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};
