import React from "react";
import { updateValue } from "../actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { Responsive } from "semantic-ui-react";

const withResponsiveWidth = WrappedComponent => props => {
  return (
    <WrappedComponent
      mobile={props.width < Responsive.onlyMobile.maxWidth ? true : false}
      tablet={props.width < Responsive.onlyTablet.maxWidth ? true : false}
      computer={props.width < Responsive.onlyComputer.maxWidth ? true : false}
      updateEvent={props.onUpdateWidth}
      {...props}
    />
  );
};

const mapStateToProps = state => ({
  width: state.width
});

const mapDispatchToProps = dispatch => ({
  onUpdateWidth: (event, { width }) =>
    dispatch(updateValue("WIDTH", { width }.width))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withResponsiveWidth
);
