import { Dish } from "../Dish/component";

export const Menu = ({ dishes }) => {
  return (
    <div>
      <h3>Menu: </h3>
      <ul>
        {dishes?.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
