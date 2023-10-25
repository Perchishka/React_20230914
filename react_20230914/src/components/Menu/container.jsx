import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantMenuById } from "../../redux/entities/restaurant/selectors";
import { Menu } from "./component";
import { useEffect } from "react";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes";

export const MenuContainer = ({restaurantId})=>{

    const menu = useSelector((state)=>selectRestaurantMenuById(state, restaurantId))

    const dispatch = useDispatch();
     useEffect(()=>{
dispatch(getDishes(restaurantId))
     }, [restaurantId])
    return <Menu restaurantMenu={menu}/>

} 