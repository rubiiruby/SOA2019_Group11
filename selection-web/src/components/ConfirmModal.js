import React from "react";
import { Modal } from "semantic-ui-react";
import withResponsiveWidth from "../containers/withResponsiveWidth";

const ConfirmModal = props => (
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
);

export default withResponsiveWidth(ConfirmModal);
