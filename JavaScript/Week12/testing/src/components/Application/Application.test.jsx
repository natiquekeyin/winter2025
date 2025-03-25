import React from "react";
import Application from "./Application";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Application", () => {
  test("Application renders correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElmement2 = screen.getByLabelText("Name");
    expect(nameElmement2).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button", {
      name: "Add",
    });
    expect(submitButtonElement).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const pageHeading2 = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageHeading2).toBeInTheDocument();

    const conditionElement = screen.getByRole("checkbox");
    expect(conditionElement).toBeInTheDocument();

    const nameElement3 = screen.getByDisplayValue("Alan");
    expect(nameElement3).toBeInTheDocument();

    const resetButton = screen.getByRole("button", {
      name: "Clear",
    });
    expect(resetButton).toBeInTheDocument();
  });
});
