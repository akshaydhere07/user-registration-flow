// Step1.test.jsx

import "@testing-library/jest-dom";

import {
  render,
  screen,
} from "@testing-library/react";

import {
  BrowserRouter,
} from "react-router-dom";

import Step1 from "../pages/Step1";

describe("Step1 Component", () => {

  test(
    "renders registration title",
    () => {

      render(
        <BrowserRouter>
          <Step1 />
        </BrowserRouter>
      );

      const title =
        screen.getByText(
          /Registration/i
        );

      expect(title)
        .toBeInTheDocument();
    }
  );

});