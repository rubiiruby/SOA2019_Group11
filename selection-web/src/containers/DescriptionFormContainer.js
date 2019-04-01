import React from "react";
import DescriptionForm from "../components/DescriptionForm";
import { connect } from "react-redux";
import { uploadImage } from "../actions";
import { useDropzone } from "react-dropzone";
import withUpdateStep from "../containers/withUpdateStep";

const DescriptionFormContainer = props => {
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
    <DescriptionForm
      images={props.images}
      onUploadImages={props.onUploadImages}
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      isDragActive={isDragActive}
      onUpdateStep={props.onUpdateStep}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  onUploadImages: files => dispatch(uploadImage("PREVIEW", files))
});

const mapStateToProps = state => ({
  images: state.previewImage
});

export default withUpdateStep(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DescriptionFormContainer)
);
