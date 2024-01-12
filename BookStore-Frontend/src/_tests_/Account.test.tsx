import React from "react";
import Account from "../pages/account/Account";
import { shallow,mount } from "enzyme/build";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import '../setupTests'

const component = shallow(<Account />);

describe("test if containers of account component are loaded", () => {
  it("test if account container is loaded", () => {
    expect(component.find(".account-container").exists()).toBe(true);
  });
  it("test if styled tabs section is loaded", () => {
    expect(component.find(".account-section").exists()).toBe(true);
  });
  it("test if login component is loaded", () => {
    expect(component.find(Login).exists()).toBe(true);
  });
  it("test if signup component is not loaded", () => {
    expect(component.find(SignUp).exists()).toBe(false);
  });
});