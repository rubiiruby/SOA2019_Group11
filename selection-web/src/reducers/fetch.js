export default function createFetchWithNamedType(statusName) {
  return function(result = { status: "idle", loading: false }, action) {
    switch (action.type) {
      case `FETCH_SUCCESS_${statusName}`:
        return { loading: false, status: "success", response: action.response };
      case `FETCH_FAILURE_${statusName}`:
        return { loading: false, status: "fail" };
      case `FETCHING_${statusName}`:
        return { status: "idle", loading: true };
      case `FETCH_IDLE_${statusName}`:
        return { status: "idle", loading: false };
      default:
        return result;
    }
  };
}
