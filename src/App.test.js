import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders timeline component", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React Timeline Component/i);
  expect(linkElement).toBeInTheDocument();
});
