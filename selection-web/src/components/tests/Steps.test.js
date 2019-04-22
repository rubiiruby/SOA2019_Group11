import React from "react";
import { shallow, mount, render } from "enzyme";
import Steps from "../Steps";
import "../../setupTests";

it("should render without throwing an error", () => {
  const component = render(<Steps step = {0} currentstep = {0} />);
  expect(component.find("Step"));
});
