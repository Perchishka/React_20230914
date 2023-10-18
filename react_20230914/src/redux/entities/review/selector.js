const selectReviewModule = (state)=> state.review;

export const selectReviewById = (state, id) => selectReviewModule(state).entities[id];
export const selectUserId = (state, id) => selectReviewById(state,id).userId;
