import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const ThanksModal = props => (
  <Modal
    open={props.open}
    centered
    basic
    closeOnDocumentClick
    closeOnDimmerClick
    onClose={() => props.setModal(false)}
    style={{ textAlign: "center" }}
    size="large"
  >
    <Header
      style={{ display: "inline-block" }}
      icon="hand spock"
      content="Thanks for your vote!"
    />
    <Modal.Content>
      <p>You can visit this page again when this campaign end</p>
    </Modal.Content>
    <Button onClick={() => props.setModal(false)} basic color="green">
      OK
    </Button>
  </Modal>
);

export default ThanksModal;
