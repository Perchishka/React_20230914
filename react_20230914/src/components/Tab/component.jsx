import { Button } from "../BaseComponents/Button/component";

export const Tab = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
