import React from "react";
import renderer from "react-test-renderer";
import Description from "../../components/Description/Description";

it("Description displays a text in a paragraph", () => {
  const component = renderer.create(
    <Description text={"this is a testing description"} />
  );
  const testInstance = component.root;
  expect(testInstance.findByProps({ className: "description" }).children).toEqual([
    "this is a testing description",
  ]);
  expect(testInstance.findByType('p')).toBeTruthy();
});
