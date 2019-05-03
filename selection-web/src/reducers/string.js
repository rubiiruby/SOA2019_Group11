export default function createStringWithNamedType(stringName) {
  return function(string = "", action) {
    switch (action.type) {
      case `UPDATE_STRING_${stringName}`:
        return action.string;
      case `RESET_${stringName}`:
        return "";
      default:
        return string;
    }
  };
}
