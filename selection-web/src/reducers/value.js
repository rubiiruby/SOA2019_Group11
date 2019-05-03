export default function createValueWithNamedType(valueName) {
  return function(value = 0, action) {
    switch (action.type) {
      case `UPDATE_VALUE_${valueName}`:
        if (valueName === "STEP" && action.value < value) {
          return value;
        } else {
          return action.value;
        }
      case `RESET_${valueName}`:
        return 0;
      default:
        return value;
    }
  };
}
