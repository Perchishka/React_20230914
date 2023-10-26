import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../redux/entities/review/thunks/get-reviews";
import { selectRequestStatus } from "../redux/ui/request/selector";

export function useRequest(thunk, ...params) {
  const request = useRef();

  const requestStatus = useSelector((state) =>
    selectRequestStatus(state, request.current?.requestId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    request.current = dispatch(thunk(...params));
    return () => {
      // reviewRequest.current = abort();
      request.current = null;
    };
  }, [...params, thunk]);

  return requestStatus;
}
