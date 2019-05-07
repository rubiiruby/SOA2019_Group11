import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ErrorModal = props => (
  <Modal
    open={props.open}
    centered
    basic
    closeOnDocumentClick
    closeOnDimmerClick
    onClose={() => {
        props.setModal(false)
        
    }}
    style={{ textAlign: "center" }}
    size="large"
  >
    <Header
      style={{ display: "inline-block" }}
      content="Sorry, Something wrong"
    />
    <Modal.Actions style={{textAlign: 'center'}}>
    <Link to={props.link}>
    <Button onClick={() => props.setModal(false)}  >
      OK
    </Button>
    </Link>
    </Modal.Actions>
  </Modal>
);

export default ErrorModal;
