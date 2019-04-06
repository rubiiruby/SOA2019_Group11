import React from "react";
import { connect } from "react-redux";
import { uploadImage, removeImage } from "../actions";
import { useDropzone } from "react-dropzone";
import ImagesForm from "../components/ImagesForm";

const ImagesFormContainer = props => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: files => {
      props.onUploadImages(
        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    },
    accept: "image/*"
  });
  return (
    <ImagesForm
      images={props.images}
      onUploadImages={props.onUploadImages}
      onRemoveImage={props.onRemoveImage}
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      isDragActive={isDragActive}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  onUploadImages: images => dispatch(uploadImage("PREVIEW", images)),
  onRemoveImage: index => {
    dispatch(removeImage("PREVIEW", index));
  }
});

const mapStateToProps = state => ({
  images: state.previewImage
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesFormContainer);
