export default function createFetchWithNamedType(statusName) {
  return function(result = { status: "idle", loading: false }, action) {
    switch (action.type) {
      case `FETCH_SUCCESS_${statusName}`:
        return { loading: false };
      case `FETCH_FAILURE_${statusName}`:
        return { loading: false };
      case `FETCHING_${statusName}`:
        return { status: "idle", loading: true };
      default:
        return result;
    }
  };
}
