import axios from "axios";

const userService = "http://localhost:5000/user/";
const campaignService = "http://localhost:8080/";

export const reset = type => ({
  type: `RESET_${type}`
});
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
    dispatch(updateString("USERNAME", response.data.fullName));
    dispatch(updateString("TOKEN", response.data.Authorization));
    axios.defaults.headers = {
      Authorization: response.data.Authorization
    };

    console.log("signin success");
  } catch (error) {
    console.log(error);
    dispatch(fetchFailure("SIGNIN", error));
    dispatch(fetchIdle("SIGNIN"));
    console.log("signin fail");
  }
};
export const signout = () => dispatch => {
  dispatch(updateString("AUTHORIZED", "SIGNOUT"));
  dispatch(updateString("TOKEN", ""));
};
export const createCampaign = campaign => async dispatch => {
  dispatch(fetchStart("CREATE_CAMPAIGN"));
  console.log(campaign);
  try {
    var bodyFormData = new FormData();
    for (const file of campaign.images) {
      bodyFormData.append("images", file);
    }
    const response = await axios.post(`${campaignService}campaign`, campaign);
    console.log("create success");
    console.log(response);
    const uploadImage = await axios.post(
      `${campaignService}campaign/${response.data.id}/images`,
      bodyFormData,
      {
        headers: {
          "content-type": "multipart/form-data"
        }
      }
    );
    console.log(uploadImage);
    const mergeResponse = { ...response, ...uploadImage };
    console.log(mergeResponse);
    dispatch(fetchSuccess("CREATE_CAMPAIGN", mergeResponse));
    //dispatch(resetCreate());
  } catch (error) {
    console.log("create fail");
    dispatch(fetchFailure("CREATE_CAMPAIGN", error));
  }
  dispatch(fetchIdle("CREATE_CAMPAIGN"));
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
  dispatch(fetchIdle("REGISTER"));
};
export const vote = (campaignId, choiceId) => async dispatch => {
  dispatch(fetchStart("VOTE"));
  try {
    const response = await axios.post(
      `${campaignService}campaign/${campaignId}/vote`,
      { candidate: choiceId }
    );
    dispatch(fetchSuccess("VOTE"), response);
    console.log(response);
  } catch (error) {
    dispatch(fetchFailure("VOTE"), error);
    console.log("vote failure");
  }
};
export const resetCreate = () => dispatch => {
  dispatch(reset("STEP"));
  dispatch(reset("CURRENT_STEP"));
  dispatch(reset("PREVIEW"));
  dispatch(reset("CREATE_TITLE"));
  dispatch(reset("CREATE_DESCRIPTION"));
  dispatch(reset("CREATE_CHOICES"));
  dispatch(reset("END_DATE"));
};
export const getCampaign = async id => {
  let response = await axios.get(`${campaignService}campaign/${id}`);
  console.log(response);
  return response.data;
};
