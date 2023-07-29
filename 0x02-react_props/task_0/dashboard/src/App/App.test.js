// App.test.js
import React from "react";
import { shallow } from "enzyme"; // If you're using Enzyme for shallow rendering
import App from "./App";
import Header from "./Header";
import Login from "./Login";
import Footer from "./Footer";

describe("App Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("contains the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("contains the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it("contains the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
  });

  it("contains the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
});
