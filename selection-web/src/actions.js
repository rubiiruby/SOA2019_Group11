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
