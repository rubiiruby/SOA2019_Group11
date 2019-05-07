import axios from "axios";

const userService = "http://localhost:3001/user/";
const campaignService = "http://localhost:3002/";
const reportService = "http://localhost:3003/";

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
    console.log(response.data.Authorization);
    axios.defaults.headers.common["authorization"] =
      response.data.Authorization;

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
  axios.defaults.headers.common["authorization"] = "";
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

    const uploadImage = await axios.put(
      `${campaignService}campaign/${response.data.id}`,
      bodyFormData,
      {
        headers: {
          "content-type": "multipart/form-data"
        }
      }
    );
    console.log(uploadImage);

    response.data.Candidates.forEach(async (candidate, index) => {
      var candidateImage = new FormData();
      console.log(campaign.candidates[index]);
      if (
        Object.getOwnPropertyNames(campaign.candidates[index].image).length !==
        0
      ) {
        candidateImage.append("image", campaign.candidates[index].image);
        console.log(
          `put ${campaignService}${response.data.id}/candidate/${candidate.id}`
        );
        const uploadCandidatePic = await axios.put(
          `${campaignService}campaign/${response.data.id}/candidate/${
            candidate.id
          }`,
          candidateImage
        );

        if (index === campaign.candidates.length - 1) {
          dispatch(fetchSuccess("CREATE_CAMPAIGN", response));
        }
      }
    });

    const mergeResponse = { ...response, ...uploadImage };
    console.log(mergeResponse);
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
    console.log(`vote start ${campaignService}campaign/${campaignId}/vote`);
    const response = await axios.post(
      `${campaignService}campaign/${campaignId}/vote`,
      { candidateId: choiceId }
    );
    console.log(response);
    dispatch(fetchSuccess("VOTE"), response);
  } catch (error) {
    dispatch(fetchFailure("VOTE"), error);
    console.log("vote failure");
  }
  dispatch(fetchIdle("VOTE"));
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
  const response = await axios.get(`${campaignService}campaign/${id}`);
  console.log(response);
  return response.data;
};
export const getVotedCampaign = async id => {
  const response = await axios.get(`${campaignService}history/vote`, id);
  console.log(response);
  return response.data;
};
export const getResult = async id => {
  const response = await axios.get(`${campaignService}campaign/${id}/result`);
  console.log(response);
  return response.data;
};
export const getReport = async id => {
  const response = await axios.get(`${reportService}report/${id}`);
  console.log(response);
  return response.data;
};
