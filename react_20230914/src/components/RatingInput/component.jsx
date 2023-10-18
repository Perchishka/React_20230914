import classNames from "classnames";
import styles from "./styles.module.css"

export const RatingInput = ({ className, value, onChange, maxrating = 5 }) => {
  return (
    <div className={classNames(styles.root, className)}>
      {new Array(maxrating).fill(null).map((_, index) => (
        <button 
        className={classNames(styles.star, {[styles.active]: value ===index+1})} 
        key={index} 
        onClick={() => onChange(index + 1)}>{index+1}</button>
      ))}
    </div>
  );
};
