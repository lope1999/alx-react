// Footer.test.js
import React from "react";
import { shallow } from "enzyme"; // If you're using Enzyme for shallow rendering
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });
});
