import React from 'react'
import { Button, Checkbox, Form, Segment, Responsive } from 'semantic-ui-react'
import AppBar from '../components/AppBar';
import withResponsiveWidth from '../containers/withResponsiveWidth';


const Register = props => (
    <Responsive fireOnMount onUpdate={props.updateEvent}>
    <Segment>
      <AppBar />
    </Segment>
    <Segment basic style={{ margin: "4em 14em 4em 14em" }}>
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  </Segment>
  </Responsive>
);

export default withResponsiveWidth(Register);