import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

test('displays a "Hello World" message', () => {
  render(<Heading sampleProperty="Hello World" />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

test("should return true", () => {
  expect(true).toBe(true);
});
