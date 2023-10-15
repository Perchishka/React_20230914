import { Dish } from "../Dish/component";

export const Menu = ({menuIds}) => {

  return (
    <div>
      <h3>Menu: </h3>
      <ul>
        {menuIds.map((id) => (
          <li key={id}>
            <Dish dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
