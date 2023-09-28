import { OrderCounter } from "../OrderCounter/component";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu?.map((menuItem) => (
        <li key={menuItem.id}>
          <span>
            {menuItem.name} - ${menuItem.price} <OrderCounter />
          </span>
        </li>
      ))}
    </ul>
  );
};
