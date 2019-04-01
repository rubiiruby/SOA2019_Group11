export default function createImageWithNamedType(imageName) {
  return function(files = [], action) {
    switch (action.type) {
      case `UPLOAD_IMAGE_${imageName}`:
        files = files.slice();
        files.push(action.files[0]);
        console.log(files);
        return files;
      default:
        return files;
    }
  };
}
