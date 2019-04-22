import React from 'react'
import { Button, Header, Image, Modal, Form, Grid, Message, Segment } from 'semantic-ui-react'
import withResponsiveWidth from '../containers/withResponsiveWidth';

const LoginModal = (props) => (
  <Modal style={{padding:'1em'}} size='small' trigger={<Button inverted basic borderless={props.mobile.toString()}
    style={{ marginLeft: "0.5em" }}>Sign in</Button>}>
    <Modal.Content >
    <Form>
    <Form.Field>
      <label>E-mail or Phone number</label>
      <input placeholder='E-mail or Phone number' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input type='password' placeholder='Password' />
    </Form.Field>
    <Button color="blue" floated='right' type='submit'>Login</Button>
    </Form>
    </Modal.Content>
  </Modal>
)

export default withResponsiveWidth(LoginModal)