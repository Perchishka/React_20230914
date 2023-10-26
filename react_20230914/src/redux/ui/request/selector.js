import { REQUEST_STATUS } from "../../../constants/statuses";

export const selectModule = (state) => state.request;

export const selectRequestStatus = (state, requestId) => selectModule(state)[requestId]?.status || REQUEST_STATUS.idle;