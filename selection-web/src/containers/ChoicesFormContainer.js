import React from "react";
import CreateChoicesForm from "../components/ChoicesForm";
import { connect } from "react-redux";
import { addChoice, removeChoice, updateChoice } from "../actions";
import uniqueid from "uniqid";

const ChoicesFormContainer = props => {
  const onChangeTitle = (index, title) => {
    var choice = props.choices[index];
    choice.title = title;
    props.onUpdateChoice(index, choice);
  };
  const onChangeDescription = (index, detail) => {
    var choice = props.choices[index];
    choice.detail = detail;
    props.onUpdateChoice(index, choice);
  };
  const onUploadImage = (index, image) => {
    var choice = props.choices[index];
    choice.image = Object.assign(image[0], {
      preview: URL.createObjectURL(image[0])
    });
    props.onUpdateChoice(index, choice);
  };
  const onRemoveImage = index => {
    var choice = props.choices[index];
    choice.image = {};
    props.onUpdateChoice(index, choice);
  };
  return (
    <CreateChoicesForm
      {...props}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
      onUploadImage={onUploadImage}
      onRemoveImage={onRemoveImage}
    />
  );
};

const mapStateToProps = state => ({
  choices: state.createCampaignChoices
});

const mapDispatchToProps = dispatch => ({
  onAddChoice: () => {
    dispatch(
      addChoice("CREATE_CHOICES", {
        title: "",
        detail: "",
        image: {},
        id: uniqueid()
      })
    );
  },
  onRemoveChoice: index => {
    dispatch(removeChoice("CREATE_CHOICES", index));
  },
  onUpdateChoice: (index, choice) => {
    dispatch(updateChoice("CREATE_CHOICES", index, choice));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoicesFormContainer);
