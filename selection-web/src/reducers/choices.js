export default function createChoicesWithNamedType(choicesName) {
  return function(
    choices = [{ title: "", description: "", image: {}, id: "unique" }],
    action
  ) {
    switch (action.type) {
      case `ADD_CHOICE_${choicesName}`:
        choices = choices.slice();
        choices.push(action.choice);
        return choices;
      case `REMOVE_CHOICE_${choicesName}`:
        choices = choices.slice();
        choices.splice(action.index, 1);
        return choices;
      case `UPDATE_CHOICE_${choicesName}`:
        choices = choices.slice();
        choices[action.index] = action.choice;
        return choices;
      case `RESET_${choicesName}`:
        return [{ title: "", description: "", image: {}, id: "unique" }];
      default:
        return choices;
    }
  };
}
