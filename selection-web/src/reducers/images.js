export default function createImageWithNamedType(imageName) {
  return function(files = [], action) {
    switch (action.type) {
      case `UPLOAD_IMAGE_${imageName}`:
        files = files.slice();
        files.push(action.files[0]);
        return files;
      case `REMOVE_IMAGE_${imageName}`:
        files = files.slice();
        files.splice(action.index, 1);
        return files;
      case `RESET_${imageName}`:
        return [];
      default:
        return files;
    }
  };
}
