import axios from "axios";

const userService = "http://192.168.1.34:5000/user/";
const campaignService = "https://soa-project-selection-234112.appspot.com/";

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
export const fetchIdle = type => ({
  type: `FETCH_IDLE_${type}`
});
export const fetchSuccess = (type, response) => ({
  type: `FETCH_SUCCESS_${type}`,
  response
});
export const fetchFailure = (type, response) => ({
  type: `FETCH_FAILURE_${type}`,
  response
});
export const signin = (username, password) => async dispatch => {
  dispatch(fetchStart("SIGNIN"));
  try {
    const response = await axios.post(`${userService}signin`, {
      username,
      password
    });
    console.log(response);
    dispatch(fetchSuccess("SIGNIN", response));
    dispatch(updateString("AUTHORIZED", "SIGNIN"));
    console.log("signin success");
  } catch (error) {
    dispatch(fetchFailure("SIGNIN", error));
    dispatch(fetchIdle("SIGNIN"));
    console.log(error);
    console.log("signin fail");
  }
};
export const signout = () => dispatch =>
  dispatch(updateString("AUTHORIZED", "SIGNOUT"));
export const createCampaign = campaign => async dispatch => {
  dispatch(fetchStart("CREATE_CAMPAIGN"));
  console.log(campaign);
  try {
    const response = await axios.post(`${campaignService}campaign`, campaign);
    console.log("create success");
    dispatch(fetchSuccess("CREATE_CAMPAIGN", response));
  } catch (error) {
    console.log("create fail");
    dispatch(fetchFailure("CREATE_CAMPAIGN", error));
  }
};
export const register = user => async dispatch => {
  dispatch(fetchStart("REGISTER"));
  console.log(user);
  try {
    const response = await axios.post(`${userService}signup`, user);
    console.log("register success");
    dispatch(fetchSuccess("REGISTER", response));
  } catch (error) {
    console.log("register fail");
    dispatch(fetchFailure("REGISTER", error));
  }
};
export const vote = choice => async dispatch => {
  dispatch(fetchStart("VOTE"));
  try {
    const response = await axios.post(
      `${campaignService}campaign/${choice.id}`,
      { choice }
    );
    dispatch(fetchSuccess("VOTE"), response);
    console.log("vote success");
  } catch (error) {
    dispatch(fetchFailure("VOTE"), error);
    console.log("vote failure");
  }
};
