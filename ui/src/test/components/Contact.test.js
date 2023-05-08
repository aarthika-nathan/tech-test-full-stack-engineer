import React from "react";
import renderer from "react-test-renderer";
import Contact from "../../components/Contact/Contact";

it("Contact displays a email and phone number", () => {
  const component = renderer.create(
    <Contact email={"aaa@aa.com"} telephone={"028237373"} />
  );
  const testInstance = component.root;
  expect(testInstance.findAllByType('a').length).toBe(2);
  expect(testInstance.findAllByType('svg').length).toBe(2);
});
