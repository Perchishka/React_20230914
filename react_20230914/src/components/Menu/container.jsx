import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/entities/dish/selectors"

export const MenuContainer = ({restaurantId})=>{

    const dish = useSelector((state, id)=>selectDishesById(state, restaurantId))

} 