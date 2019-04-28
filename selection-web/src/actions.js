import axios from "axios";

const api = "https://soa-project-selection-234112.appspot.com/";

export const updateValue = (type, value) => ({
  type: `UPDATE_VALUE_${type}`,
  value
});
export const uploadImage = (type, files) => ({
  type: `UPLOAD_IMAGE_${type}`,
  files
});
export const removeImage = (type, index) => ({
  type: `REMOVE_IMAGE_${type}`,
  index
});
export const updateString = (type, string) => ({
  type: `UPDATE_STRING_${type}`,
  string
});
export const addChoice = (type, choice) => ({
  type: `ADD_CHOICE_${type}`,
  choice
});
export const removeChoice = (type, index) => ({
  type: `REMOVE_CHOICE_${type}`,
  index
});
export const updateChoice = (type, index, choice) => ({
  type: `UPDATE_CHOICE_${type}`,
  index,
  choice
});
export const fetchStart = type => ({
  type: `FETCHING_${type}`
});
export const fetchSuccess = (type, response) => ({
  type: `FETCH_SUCCESS_${type}`,
  response
});
export const fetchFailure = (type, response) => ({
  type: `FETCH_FAILURE_${type}`,
  response
});
export const createCampaign = async campaign => dispatch => {
  dispatch(fetchStart("CREATE_CAMPAIGN"));
};
