import { RestaurantTabContainer } from "../RestaurantTab/container";

export const RestaurantTabs = ({  onTabClick, restaurantIds }) => {

  return (
    <div>
      {restaurantIds.map((id) => (
      <RestaurantTabContainer key = {id} onClick={()=> onTabClick(id) } restaurantId={id}></RestaurantTabContainer>
      ))}
    </div>  
  );
};
