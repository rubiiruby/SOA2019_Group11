export default function createValueWithNamedType(valueName) {
  return function(value = 0, action) {
    switch (action.type) {
      case `UPDATE_VALUE_${valueName}`:
        return action.value;
      default:
        return value;
    }
  };
}
