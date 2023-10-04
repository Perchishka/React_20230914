import { OrderCounter } from "../OrderCounter/component";

export const Dish = ({ dish }) => {
  return (
    <span>
      {dish.name} - ${dish.price} {<OrderCounter />}
    </span>
  );
};
