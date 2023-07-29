// Login.test.js
import React from "react";
import { shallow } from "enzyme"; // If you're using Enzyme for shallow rendering
import Login from "./Login";

describe("Login Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});
