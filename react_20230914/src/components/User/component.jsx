import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user/selector";

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));
  return <div>{user.name}</div>;
};
