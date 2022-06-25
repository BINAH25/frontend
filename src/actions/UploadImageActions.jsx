import * as UploadApi from "../api/UploadImageRequest";
export const UploadImage = (data) => async (dispatch) => {
  try {
    await UploadApi.UploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const UploadPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await UploadApi.UploadPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
