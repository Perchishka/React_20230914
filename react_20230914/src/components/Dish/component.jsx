
import { OrderCounter } from "../OrderCounter/component";

export const Dish = ({ dish }) => {
  return (
    <div>
      {dish.name} - {dish.price}$ {<OrderCounter />}
    </div>
  );
};
