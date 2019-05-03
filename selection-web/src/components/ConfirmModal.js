import React from "react";
import { Modal, Dimmer, Loader } from "semantic-ui-react";
import withResponsiveWidth from "../containers/withResponsiveWidth";

const ConfirmModal = props => (
  <Dimmer active={props.loading}>
    <Loader />
  <Modal
    open={props.modal}
    header={props.header}
    content={props.content}
    actions={[
      "Cancel",
      {
        key: "done",
        content: "Confirm",
        positive: true,
        onClick: () => props.action()
      }
    ]}
    onClose={() => props.setModal(false)}
  />
  </Dimmer>
);

export default withResponsiveWidth(ConfirmModal);
