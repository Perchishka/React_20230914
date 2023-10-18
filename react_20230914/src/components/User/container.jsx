import { useSelector } from "react-redux"
import { selectReviewById } from "../../redux/entities/review/selector"
import { User } from "./component";

export const UserContainer = ({userId}) => {
 const user = useSelector((state)=> selectReviewById(state, userId));
if(!user){
    return null;
}
 return <User user = {user} /> 
}