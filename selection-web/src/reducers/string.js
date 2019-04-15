export default function createStringWithNamedType(stringName) {
  return function(string = "", action) {
    switch (action.type) {
      case `UPDATE_STRING_${stringName}`:
        return action.string;
      default:
        return string;
    }
  };
}
