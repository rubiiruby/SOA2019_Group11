import React from "react";
import { shallow, mount, render } from "enzyme";
import Steps from "../Steps";
import "../../setupTests";

it("should render without throwing an error", () => {
  const component = shallow(<Steps />);
  expect(component.find("Step"));
});
