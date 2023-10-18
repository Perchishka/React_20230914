const selectRestaurantModule = (state) => state.restaurant;

export const selectResuarantById = (state, id) => selectRestaurantModule(state).entities[id]; 

export const selectRestaurantNameById = (state, id) => selectResuarantById(state, id).name;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantLoadingStatus = (state)=> selectRestaurantModule(state).status;