import { useSelector } from "react-redux";
import { OrderCounter } from "../OrderCounter/component";
import { selectDishById } from "../../redux/entities/dish/selectors";

export const Dish = ({ dishId }) => {
  const dish = useSelector((state)=>selectDishById(state, dishId));
  return (
    <div>
      {dish.name} - {dish.price}$ {<OrderCounter />}
    </div>
  );
};
